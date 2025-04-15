import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

export const CartCard = ({items, setItems,increment,decrement}) => {
    // const { removeFromCart } = useCart();
    // const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
//     const[ram,setRam]=useState("")
//     const {cartId} = useParams

//     const arrayBufferToBase64 = (buffer) => {
//         let binary = '';
//         const bytes = new Uint8Array(buffer);
//         const len = bytes.byteLength;
//         for (let i = 0; i < len; i++) {
//           binary += String.fromCharCode(bytes[i]);
//         }
//         return window.btoa(binary);
//       };

//       useEffect(() => {
//         async function foodItems() {
//             const response = await fetch(`http://localhost:3000/cart/2`);
//             const data = await response.json()
//             console.log(data,"dataitmekjgik")
//             let Res_data=data.map((dt)=>{
//                 try{
//                     const byteArray = new Uint8Array(dt.imagedata.data);
 
//                     const base64String = arrayBufferToBase64(byteArray);
 
//                     const base64Image = `data:image/webp;base64,${base64String}`;
//                     dt.imagedata=base64Image
//                 }catch (error) {
//                     console.error('Error fetching products Images:', error);
//                   }
 
//                   return dt;
//             });
//             setItems(Res_data);
//         }
//         foodItems();
//     }, [ram])

// // useEffect(() => {
// //         async function foodItems() {
// //             const response = await fetch(`http://localhost:3000/cart/2`);
// //             const data = await response.json()
// //              setItems(data);
// //             console.log(data,"dataaaa")
// //         }
// //         foodItems();
// //     }, [ram]);


//     async function updateQuantity(quantityValue,menuItemIDValue) {
//         console.log(quantityValue,menuItemIDValue,"quantityValue,menuItemIDValue");
//         const response = await fetch(`http://localhost:3000/cart/2`,{
//             method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             quantity: quantityValue,
//             menuItemID: menuItemIDValue,
//         }), 
//         });
        
//          const data = await response.json()

//          setRam(data)
    
        
//     }

//     async function deleteItem(menuItemIDValue) {
        
//         const response = await fetch(`http://localhost:3000/cart/2?menuItemID=${menuItemIDValue}`,{
//             method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//         },
        
//         });
        
//          const data = await response.json()
//          setRam(data)
//         // //  setItems(data);
//         // console.log(data," update quantity dataaaa")
//     }

//     const increment = (q, m) => {
        
//         setCount(q + 1);
//         updateQuantity(q+1, m);
//     };

//     const decrement = (q,m) => {
//         if (q > 1) {
//             //setCount( quantity - 1);
//             updateQuantity(q-1, m);
//         } else {
//             // removeFromCart(items);
//             deleteItem(m);
//         }
//     };

    return (
        
        <div className=" mx-auto p-6 mb-3 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            {items.map((item)=>(
                <div key={item.menuItemID}>
               <div className="flex">
                <img src={item.imagedata} alt="" style={{ width: "60px", height: "50px" }} />
                <div className="pl-4 text-start">
                    <Link to="#">
                        <h5 class=" text-lg font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                        <p className=" ">{item.place}</p>
                        <hr className="w-10 mt-2 h-1 bg-gray-800" />
                    </Link>
                </div>

            </div>
            <div className="text-start mt-3 mb-7 flex items-center">
                <i className="fi fi-bs-dot-circle text-green-600 text-sm"></i>
                <p className="pl-5 text-sm font-semibold">{item.name}</p>
                <button type="button" className="ml-4 text-green-600 bg-white border pb-1 font-medium px-2 dark:bg-gray-800 dark:text-white">
                    <span onClick={()=>decrement(item.quantity,item.menuItemID)} className="text-2xl pr-3">-</span>
                    {item.quantity}
                    <span onClick={()=>increment(item.quantity,item.menuItemID)} className="text-xl pl-3">+</span>
                </button>
                <span><i className="fi fi-sr-indian-rupee-sign text-xs pl-10"></i>{item.total_price}</span>
            </div> 
                </div>
            ))}
           
        </div>
    );
};
