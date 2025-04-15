const express = require("express");
const bcrypt = require("bcrypt");
const app = express()
app.use(express.json());
const multer = require("multer");
var cors = require("cors")
app.use(cors());

const port = 3000;

var mysql = require("mysql");
const winston = require('winston');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Lavanya@123",
    database: "swiggy"
});



// Logger configuration
const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "app.log" }),
    ],
});


//Menuitems

//this api consists fetching all menuitems , based on name and based on type and based on the restaurant name
//search
app.get("/menuitem", (req, res) => {
    const { name, type, restaurantName } = req.query;
    let sql = `SELECT m.menuItemID,
               m.name,
               m.rating,
               m.deliverytime,
               m.type,
               m.place,
               m.price,
               m.description,
               m.restaurantID,
              
               mi.image_name,
               mi.imagedata
        `;
    let queryParams = [];
    if (name) {
                sql += `FROM menuitem m
        LEFT JOIN
            menuimage mi ON m.menuItemID = mi.menuItemID
             WHERE m.name LIKE ?`;
                queryParams.push(`%${name}%`);
                
            }

    if (type) {
                sql += `FROM menuitem m
        LEFT JOIN
            menuimage mi ON m.menuItemID = mi.menuItemID 
             WHERE m.type LIKE ?`;  
            queryParams.push(`%${type}%`);
        }


        if (restaurantName) {

            sql += `, r.name AS restaurant_name,
       r.place AS restaurant_place,
       r.rating AS restaurant_rating,
       r.deliverytime AS restaurant_deliverytime,
       r.addressID AS restaurant_addressID
            FROM menuitem m
        LEFT JOIN
            menuimage mi ON m.menuItemID = mi.menuItemID
    
                LEFT JOIN restaurant r ON m.restaurantID = r.restaurantID
    
                WHERE r.name LIKE ?
    
            `;
    
            queryParams.push(`%${restaurantName}%`);
    
        }

        if(!name && !type && !restaurantName){
            sql +=`FROM menuitem m
        LEFT JOIN
            menuimage mi ON m.menuItemID = mi.menuItemID`;
        }
     
 
    
    con.query(sql, queryParams,(err, data) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Database error", details: err });
        }
        return res.json(data);
    });
 
});
 

// web api for fetching menuitem based on id
app.get("/menuitem/:menuitemID", (req, res) => {
    const { menuitemID } = req.params;
    const sql = `SELECT m.menuItemID,
               m.name,
               m.rating,
               m.deliverytime,
               m.type,
               m.place,
               m.price,
               m.description,
               m.restaurantID,
              
               mi.image_name,
               mi.imagedata
        FROM menuitem m
        LEFT JOIN
            menuimage mi ON m.menuItemID = mi.menuItemID
            where m.menuitemID=?
        
    ;`
    con.query(sql, [menuitemID], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });
 
});
 


const storage = multer.memoryStorage();
const upload = multer({ storage: storage })

app.post('/menuimage', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded.");
    }

    const menuItemID = req.headers.menuitemid;

    if (!menuItemID) {
        return res.status(400).send("menuItemID is required in headers.");
    }
    const { originalname, buffer } = req.file;

    const sql = "INSERT INTO menuimage (image_name, imagedata, menuItemID) VALUES (?, ?, ?)";

    con.query(sql, [originalname, buffer, menuItemID], (err, result) => {
        if (err) {
            console.log("Error saving to database:", err);
            return res.status(500).send("Error uploading file.");
        } else {
            return res.send("Single file uploaded and saved to database.");
        }
    });
});


app.get("/heroimage", (req, res) => {
    const sql = "select * from heroimage";
    con.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });
});


app.post('/heroimage', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded.");
    }

    const menuItemID = req.headers.menuitemid;

    if (!menuItemID) {
        return res.status(400).send("menuItemID is required in headers.");
    }
    const { buffer } = req.file;

    const sql = "INSERT INTO heroimage ( image_data, menuItemID) VALUES (?, ?)";

    con.query(sql, [buffer, menuItemID], (err, result) => {
        if (err) {
            console.log("Error saving to database:", err);
            return res.status(500).send("Error uploading file.");
        } else {
            return res.send("Single file uploaded and saved to database.");
        }
    });
});


app.get("/menuimage/:image_id", (req, res) => {
    const { image_id } = req.params;

    const sql = 'SELECT image_name, menuItemID FROM menuimage WHERE image_id = ?';
    con.query(sql, [image_id], (error, data) => {
        if (error) {
            console.log("Database error:", error);
            return res.status(500).send('Database error');
        }
        if (data.length === 0) {
            return res.status(404).send('File not found');
        }
        const file = data[0];
        const filetype = file.filename.split('.').pop().toLowerCase();

        let contentType = 'application/octet-stream';


        if (filetype === 'jpg' || filetype === 'jpeg') {
            contentType = 'image/jpeg';
        } else if (filetype === 'avif') {
            contentType = 'image/avif';
        } else if (filetype === 'png') {
            contentType = 'image/png';
        } else if (filetype === 'webp') {
            contentType = 'image/webp';
        } else {
            res.send('unsupported file')
        }

        res.contentType(contentType);

        res.send(file.filedata);
    });
});


// get all users and get user by email
app.get("/user", async (req, res) => {

    const {email} = req.query;
    console.log(email,"emailll......")
    if (email) {
        const sql = 'select * from User where email=?';

        con.query(sql, [email], (err, result) => {
            if (err) {
                console.log(sql, "error");
                return res.status(500).send("error ");
            } else {
                console.log(result, "user data")
                res.status(200).json(result);
            }
        });
    }else{
        console.log("at else......")
        const sql = 'SELECT * FROM User';
        con.query(sql,  (err, result) => {
            if (err) {
                console.log(sql, "error");
                return res.status(500).send("error ");
            } else {
                console.log(result, "user data")
               return res.status(200).json(result);
            }
        });
    }

});

// get a user by userId
app.get("/user/:userID", async (req, res) => {

    const {userID} = req.params;
   
 
        const sql = 'SELECT * FROM User where userID=?';
        con.query(sql, [userID], (err, result) => {
            if (err) {
                console.log(sql, "error");
                return res.status(500).send("error ");
            } else {
                console.log(result, "user data")
               return res.status(200).json(result);
            }
        });
    

});

//register
app.post('/user', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Hash password
        const hashpassword = await bcrypt.hash(password, 10);

            // Insert new user into the database
            const sql = 'INSERT INTO User(username,email,password) VALUES (?,?,?)';
            con.query(sql, [username, email, hashpassword], (err, data) => {
                if (err) {
                    logger.error('Database error:', err);
                    return res.status(500).json({ message: 'Internal server error' });
                }
                console.log(data, "dadkhf")



                const userID = data.insertId;

                const sql = "insert into cart(userID) values (?)";
                con.query(sql,[userID], (err, data) => {
                    if (err){ return res.json("error");}
                    else{
                        console.log( "cart created")

                    }
                });


                const fetchSql = 'SELECT *  FROM User WHERE userID = ?';

                con.query(fetchSql, [userID], (fetchErr, userData) => {

                if (fetchErr) {

                    console.log('Error fetching user:', fetchErr);

                    return res.status(500).json({ message: 'Error fetching user' });

                }

                console.log('User saved:', userData);

                return res.status(201).json(userData[0]); // Return the user data

            });
 
                // return res.status(201).json(data);
            });
        
    } catch (error) {
        logger.error('Registration error', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//login
   
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide both email and password." });
    }
  
    try {
      // SQL query to find user by email
      const sql = 'SELECT * FROM User WHERE email = ?';
      con.query(sql, [email], async (err, data) => {
        if (err) {
          console.error('Database error: ', err);
          return res.status(500).json({ message: 'Internal server error' });
        }
  
        // If no user is found
        if (data.length === 0) {
          return res.status(404).json({ message: 'User not found' });
        }
  
        const user = data[0];
        console.log(user,"userdata")
        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
  
        if (isMatch) {
          // Success login
          const sql='select * from cart where userId=?';
          let cartData=null;
          con.query(sql,[user.userID], (err, data) => {
            if (err) {
              console.error('Database error: ', err);
            }
            cartData=data[0];
            console.log(cartData,"CartData...")
            return  res.status(200).json({"user":user,"cart":cartData});
           
        })
        console.log(cartData,"data [0]");
       
        } else {
          return res.status(400).json({ message: 'Invalid credentials' });
        }
      });
    } catch (err) {
      console.error('Unexpected error: ', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });


app.get("/cart", async (req, res) => {
    const { userID } = req.query;
    let sql = "select * from cart";
    if (userID) {
        sql += " where userID = ?";
    }
    con.query(sql, [userID], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

})

app.post("/cart", async (req, res) => {
    const { userID } = req.body;

    const sql = "insert into cart(userID) values (?)";
    con.query(sql, [userID], (err, data) => {
        if (err) { return res.json("error"); }

        const userID = data.insertId;
        const fetchSql = 'SELECT *  FROM cart WHERE userID = ?';

        con.query(fetchSql, [userID], (fetchErr, cartData) => {
            if (fetchErr) {
                console.log('Error fetching user:', fetchErr);
                return res.status(500).json({ message: 'Error fetching user' });
            }
            console.log('User saved:', cartData);
            return res.status(201).json(cartData[0]); // Return the user data
        });

    });

})

//cart
app.get("/cartitems", async (req, res) => {
    const sql = "select * from cartItems";
    con.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });
});


app.get("/cart/:cartId", async (req, res) =>{

    const {cartId} = req.params;
    const sql = `SELECT m.menuItemID,
       m.name,
       m.rating,
       m.deliverytime,
       m.type,
       m.place,
       m.price,
       m.description,
       m.restaurantID,
       mi.image_name,
       mi.imagedata,
       ci.quantity,
      ci.total_price
FROM menuitem m
LEFT JOIN menuimage mi ON m.menuItemID = mi.menuItemID
LEFT JOIN cartItems ci ON m.menuItemID = ci.menuItemID
where ci.cartId = ?;`

con.query(sql,[cartId], (err,data) => {
    if (err) return res.json("error, " +err);
        return res.json(data);

})
});

// app.post("/cart/:cartId", async (req, res) => {
//     const {cartId} = req.params;
//     const {menuItemID, quantity} = req.body;
//     const sql = `INSERT INTO cartItems ( cartId, menuItemID,quantity)
//  values(?,?,?);`;
//     con.query(sql,[cartId, menuItemID,quantity], (err, data) => {
//         if (err) return res.json("error");
//         return res.json(data);
//     })

// });


app.post("/cart/:cartId", async (req, res) => {
    const { cartId } = req.params;
    const { menuItemID, quantity } = req.body;

    const sql = `INSERT INTO cartItems (cartId, menuItemID, quantity)
                 VALUES (?, ?, ?);`;

    con.query(sql, [cartId, menuItemID, quantity], (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (data.length === 0) {
        
            return res.status(400).json({ message: "Failed to add item to cart" });
        }

       
        return res.status(201).json({ message: "Item added to cart successfully", data: data });
    });
});

// app.put("/cart/:cartId", async (req, res) => {
//     const  {cartId} = req.params;
//     const {quantity, menuItemID} = req.body;
//     console.log(cartId,"cartId");

//     const sql = `update cartItems
// set quantity = ?
// where menuItemID= ? and cartId = ? ;`
// con.query(sql, [quantity,menuItemID,cartId], (err,data) => {
//     if (err) return res.json("error");
//         return res.json(data);

// })
// });

app.put("/cart/:cartId", async (req, res) => {
    const { cartId } = req.params;
    const { quantity, menuItemID } = req.body;
    console.log(cartId, "cartId");

    const sql = `UPDATE cartItems
                 SET quantity = ?
                 WHERE menuItemID = ? AND cartId = ?;`;

    con.query(sql, [quantity, menuItemID, cartId], (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (data.length === 0) {
            return res.status(404).json({ message: "Cart item not found or not updated." });
        }
        return res.status(200).json({ message: "Cart updated successfully", data: data });
    });
});


app.delete("/cart/:cartId", async (req, res) => {
    const  {cartId }= req.params;
    const {menuItemID} = req.query;
    console.log(menuItemID,"menuItemID")
    console.log(cartId,"menuItemID")
    const sql = `delete from cartItems
    where menuItemID= ? and cartId = ? ;`
    con.query(sql, [menuItemID,cartId], (err,data) => {
        if (err) return res.json("error, " +err);
            return res.json(data);
    
    })
});

   


  

//address

app.get("/address", (req, res) => {
    const sql = "select * from Address";
    con.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});

app.get("/address/:addressID", (req, res) => {
    const { addressID } = req.params;
    const sql = "select * from Address where addressID = ?";
    con.query(sql, [addressID], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});


//DeliveryAgent
app.get("/deliveryagent", (req, res) => {
    const sql = "select * from deliveryagent";
    con.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});


app.get("/deliveryagent/:agent_id", (req, res) => {
    const { agent_id } = req.params;
    const sql = "select * from deliveryagent where agent_id = ?";
    con.query(sql, [agent_id], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});

//Orders
app.get("/orders", (req, res) => {
    const sql = "select * from orders";
    con.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});


app.get("/orders/:order_id", (req, res) => {
    const { order_id } = req.params;
    const sql = "select * from orders where order_id = ?";
    con.query(sql, [order_id], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});

//Review
app.get("/review", (req, res) => {
    const sql = "select * from review";
    con.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});


app.get("/review/:review_id", (req, res) => {
    const { review_id } = req.params;
    const sql = "select * from review where review_id = ?";
    con.query(sql, [review_id], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});

//Order Status
app.get("/orderstatus", (req, res) => {
    const sql = "select * from orderstatus";
    con.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});


app.get("/orderstatus/:orderstatus_id", (req, res) => {
    const { orderstatus_id } = req.params;
    const sql = "select * from orderstatus where orderstatus_id = ?";
    con.query(sql, [orderstatus_id], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});

//Payment
app.get("/payment", (req, res) => {
    const sql = "select * from payment";
    con.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});


app.get("/payment/:paymentid", (req, res) => {
    const { paymentid } = req.params;
    const sql = "select * from payment where paymentid = ?";
    con.query(sql, [paymentid], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});

//Delivery Status
app.get("/deliverystatus", (req, res) => {
    const sql = "select * from deliverystatus";
    con.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});


app.get("/deliverystatus/:deliverystatus_id", (req, res) => {
    const { deliverystatus_id } = req.params;
    const sql = "select * from deliverystatus where deliverystatus_id = ?";
    con.query(sql, [deliverystatus_id], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});

//search
// app.get("/search/:type", (req, res) => {
//     const { type } = req.params;

//     const sql = `
//        SELECT 
//             m.name,
//             m.rating,
//             m.deliverytime,
//             m.type,
//             m.place,
//             m.price,
//             m.description,
//             m.restaurantID,
//             mi.image_name,
//             mi.imagedata
//         FROM menuitem m
//         LEFT JOIN menuimage mi 
//             ON m.menuitemID = mi.menuitemID
//         WHERE m.type = ?
//     `;

//     con.query(sql, [type], (err, data) => {
//         if (err) {
//             console.error("Error executing query:", err);
//             return res.status(500).json({ error: "An error occurred while fetching data." });
//         }

//         if (data.length === 0) {
//             return res.status(404).json({ message: "No menu item found with that name." });
//         }
// else{
//     return res.status(200).json({ message: 'Successfully logged in' });
// }
//         // Send the response with the data
//         return res.json(data);
//     });
// });

// app.get("/search/:type", (req, res) => {
//     const { type } = req.params;

//     const sql = `
//        SELECT 
//             m.name,
//             m.rating,
//             m.deliverytime,
//             m.type,
//             m.place,
//             m.price,
//             m.description,
//             m.restaurantID,
//             mi.image_name,
//             mi.imagedata
//         FROM menuitem m
//         LEFT JOIN menuimage mi 
//             ON m.menuitemID = mi.menuitemID
//         WHERE m.type = ?
//     `;

//     con.query(sql, [type], (err, data) => {
//         if (err) {
//             console.error("Database query error:", err);

//             // server error message
//             return res.status(500).json({
//                 error: "An error occurred while processing your request. Please try again later."
//             });
//         }

//         if (data.length === 0) {
//             // If no data is found, return a 404 response 
//             return res.status(404).json({
//                 message: "No menu items found for the specified type."
//             });
//         }

//         // Return the data with 200 status code successfully
//         return res.status(200).json(data);
//     });
// });


app.listen(port, () => {
    logger.info(`server is ruuning http://localhost:${port}`)
})
