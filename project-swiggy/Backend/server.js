const express = require("express")

const app = express()
const multer = require("multer");
var cors = require("cors")
app.use(cors());

const port = 5000;

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
app.get("/menuitem", (req, res) => {
    const sql = "select * from menuitem";
    con.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});


app.get("/menuitem/:menuitemID", (req, res) => {
    const { menuitemID } = req.params;
    const sql = "select * from menuitem where menuitemID = ?";
    con.query(sql, [menuitemID], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});

app.get("/menuitem/restaurant/:name", (req, res) => {
    const { name } = req.params;
    const sql = `
    SELECT m.menuItemID,
       m.image,
       m.name,
       m.rating,
       m.deliverytime,
       m.type,
       m.place,
       r.name
FROM menuitem m
JOIN restaurant r ON m.name = r.name
WHERE m.name = ?;
   `;
    
    con.query(sql, [name], (err, data) => {
        if (err) {
            logger.error(err);
            return res.status(500).send("Server Error");
        }
        if (data.length === 0) {
            return res.status(404).send("No menuitems found for this restaurant");
        }
        return res.json(data);
    })
})

//Menuimage
app.get("/menuimage", (req, res) => {
    const sql = "select * from menuimage";
    con.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});


app.get("/menuimage/:image_id", (req, res) => {
    const { image_id } = req.params;
    const sql = "select * from menuimage where image_id = ?";
    con.query(sql, [image_id], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage })

// app.post('/menuimage', upload.single('file'), (req, res) => {
//     console.log(req.file)
  
//     const { originalname, buffer } = req.file;
//     const menuItemID = req.headers.menuItemID;
//     console.log(menuItemID, "jhuh");
  
//     const sql = "INSERT INTO menuimage (image_name, imagedata,menuItemID) VALUES (?,?,?)";
//     con.query(sql, [originalname, buffer, menuItemID], (err, result) => {
//       if (err) {
//         console.log("Error saving to database:", err);
//         res.status(500).send("Error uploading file");
//       } else {
//         res.send("Single file uploaded and saved to database");
//       }
//     });
  
//   });

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
        contentType ='image/webp';
      } else {
        res.send('unsupported file')
      }
  
      res.contentType(contentType);
  
      res.send(file.filedata);
    });
  });

//Restaurant
app.get("/restaurant", (req, res) => {
    const sql = "select * from Restaurant";
    con.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});

app.get("/restaurant/:restaurantID", (req, res) => {
    const { restaurantID } = req.params;
    const sql = "select * from Restaurant where restaurantID = ?";
    con.query(sql, [restaurantID], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});

app.post("/restaurant", (req, res) => {
    const restaurantID = req.body.restaurantID;
    const addressID = req.body.addressID;
    const name = req.body.name;
    const rating = req.body.rating;
    const place = req.body.place;
    const time = req.body.time;

    const sql = "insert into Restaurant(restaurantID,addressID, name, rating, place, time) values(?,?,?,?,?,?)";
    con.query(sql, [restaurantID, addressID, name, rating, place, time], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    })
});

//User
app.get("/user", (req, res) => {
    const sql = "select * from User";
    con.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});


app.get("/user/:userID", (req, res) => {
    const { userID } = req.params;
    const sql = "select * from User where userID = ?";
    con.query(sql, [userID], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });

});

//Address
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


app.listen(port, () => {
    logger.info(`server is ruuning http://localhost:${port}`)
})
