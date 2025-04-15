import { CartEmpty } from "./components/CartEmpty";
import { Cart } from "./Cart";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const CartPage = ({items, setItems,p,setP}) => {
 
  // const [items, setItems] = useState([]);

const[cartitem,setCartitem]=useState("")
const[count, setCount] = useState([]);

const userCartId=localStorage.getItem("usercartId")
console.log(userCartId,"userCartIdhhhhhhhhhhhh")

const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  useEffect(() => {
    async function foodItems() {
        const response = await fetch(`http://localhost:3000/cart/${userCartId}`);
        const data = await response.json()
        console.log(data,"dataitmekjgik")
        let Res_data=data.map((dt)=>{
            try{
                const byteArray = new Uint8Array(dt.imagedata.data);

                const base64String = arrayBufferToBase64(byteArray);

                const base64Image = `data:image/webp;base64,${base64String}`;
                dt.imagedata=base64Image
            }catch (error) {
                console.error('Error fetching products Images:', error);
              }

              return dt;
        });
        setItems(Res_data);
      
    }
    foodItems();
}, [cartitem])


async function updateQuantity(quantityValue,menuItemIDValue) {
    console.log(quantityValue,menuItemIDValue,"quantityValue,menuItemIDValue");
    const response = await fetch(`http://localhost:3000/cart/${userCartId}`,{
        method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        quantity: quantityValue,
        menuItemID: menuItemIDValue,
    }), 
    });
    
     const data = await response.json()

     setCartitem(data)

    
}

async function deleteItem(menuItemIDValue) {
    
    const response = await fetch(`http://localhost:3000/cart/${userCartId}?menuItemID=${menuItemIDValue}`,{
        method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    
    });
    
     const data = await response.json()
     setCartitem(data)
    // //  setItems(data);
    // console.log(data," update quantity dataaaa")
}

const increment = (q, m) => {
    
    setCount(q + 1);
    updateQuantity(q+1, m);
};

const decrement = (q,m) => {
    if (q > 1) {
        //setCount( quantity - 1);
        updateQuantity(q-1, m);
    } else {
        // removeFromCart(items);
        deleteItem(m);
    }
    
};

  return (
   <main>
    { items.length>0 ? <Cart items={items} setItems={setItems} decrement={decrement} increment={increment} /> : <CartEmpty /> } 

   </main>
  )
}


        
// import { CartEmpty } from "./components/CartEmpty";
// import { Cart } from "./Cart";
// import { useState } from "react";

// export const CartPage = () => {
//   const [items, setItems] = useState([]); // Initialize the cart as empty

//   console.log(items.length, "length");

//   return (
//     <main>
 
//       {items.length === 0 ? (
//         <CartEmpty /> 
//       ) : (
//         <Cart items={items} setItems={setItems} /> 
//       )}
//     </main>
//   );
// };




