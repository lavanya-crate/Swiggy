// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

// export const TopRestaurant = () => {
//     const [items, setItems] = useState([]);
//     const [value, setValue] = useState(0);

 
 
//     useEffect(() => {
//         async function foodItems() {
//             const response = await fetch("http://localhost:8080/topRestaurants");
//             const data = await response.json()
//             setItems(data);
//         }
//         foodItems();
//     }, [])
//     console.log(items, "data")
 
//     function handleNext() {
//         setValue((prev) => prev + 80)
//     }
 
//     function handlePrev() {
//         setValue((prev) => prev - 80)
//     }
 
//     return (
//         <div className="w-[78%] mx-auto  overflow-hidden  ">
//             <div className="flex  justify-between mt-3">
//                 <h1 className="text-2xl font-bold">Top restaurant chains in Vizag</h1>
 
//                 <div className="flex gap-3">
//                     <div onClick={handlePrev} className={`bg-gray-200 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center`}>
//                         <i className=" text-2xl bi bi-arrow-left-short"></i>
//                     </div>
//                     <div onClick={handleNext} className="bg-gray-200 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center">
//                         <i className="text-2xl bi bi-arrow-right-short"></i>
//                     </div>
//                 </div>
//             </div>
 
 
//             <div className=" flex gap-5 rounded-lg">
//                 {items.map((item) => (

                
//                     <div style={{translate : `-${value}%` }} className={` duration-1000`} key={item.id} item={item}>
//                         <div className="hover:scale-95 duration-300 max-w-sm bg-white mt-5 dark:bg-gray-800 dark:border-gray-700" style={{ width: "285px" }}  >
//                             <Link to="/itemdetails">
//                                 <img className="rounded-2xl object-cover" src={item.image} alt="" style={{ width: "300px", height: "200px" }} />
//                             </Link>
//                             <div className="mt-3 text-start">
//                                 <Link to="#">
//                                     <h5 className="mb-2 text-lg leading-3 font-bold text-gray-900 dark:text-white">{item.name}</h5>
//                                     <div className="flex gap-1">
//                                         <i className="fi fi-sr-circle-star text-green-600"></i>
//                                         <span>{item.rating}</span>
//                                         <span>.</span>
//                                         <span>{item.time}</span>
//                                     </div>
//                                     <div className="flex flex-col text-gray-800">
//                                         <span>{item.type}</span>
//                                         <span>{item.place}</span>
//                                     </div>
//                                 </Link>
 
//                             </div>
//                         </div>
//                     </div>
//                 ))}
 
//             </div>
 
//             <hr className="mt-10 mb-10 width-2px"></hr>
//         </div>
//     )
// }


 
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

// export const TopRestaurant = () => {
//     const [items, setItems] = useState([]);
//     const [value, setValue] = useState(0);

//     useEffect(() => {
//         async function foodItems() {
//             const response = await fetch("http://localhost:8080/topRestaurants");
//             const data = await response.json()
//             setItems(data);
//         }
//         foodItems();
//     }, [])

//     function handleNext() {
//         setValue((prev) => prev + 80)
//     }

//     function handlePrev() {
//         setValue((prev) => prev - 80)
//     }

//     return (
//         <div className="w-[78%] mx-auto overflow-hidden">
//             <div className="flex justify-between mt-3">
//                 <h1 className="text-2xl font-bold">Top restaurant chains in Vizag</h1>
//                 <div className="flex gap-3">
//                     <div onClick={handlePrev} className={`bg-gray-200 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center`}>
//                         <i className=" text-2xl bi bi-arrow-left-short"></i>
//                     </div>
//                     <div onClick={handleNext} className="bg-gray-200 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center">
//                         <i className="text-2xl bi bi-arrow-right-short"></i>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex gap-5 rounded-lg">
//                 {items.map((item) => (
//                     <div style={{ translate: `-${value}%` }} className={`duration-1000`} key={item.id}>
//                         <div className="hover:scale-95 duration-300 max-w-sm bg-white mt-5 dark:bg-gray-800 dark:border-gray-700" style={{ width: "285px" }}>
//                             {/* Use Link with the restaurant's id */}
//                             <Link to={`/hotel-detail/${item.id}`}>
//                                 <img className="rounded-2xl object-cover" src={item.image} alt={item.name} style={{ width: "300px", height: "200px" }} />
//                             </Link>
//                             <div className="mt-3 text-start">
//                                 <h5 className="mb-2 text-lg leading-3 font-bold text-gray-900 dark:text-white">{item.name}</h5>
//                                 <div className="flex gap-1">
//                                     <i className="fi fi-sr-circle-star text-green-600"></i>
//                                     <span>{item.rating}</span>
//                                     <span>.</span>
//                                     <span>{item.time}</span>
//                                 </div>
//                                 <div className="flex flex-col text-gray-800">
//                                     <span>{item.type}</span>
//                                     <span>{item.place}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <hr className="mt-10 mb-10 width-2px" />
//         </div>
//     );
// }


 
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
 
export const TopRestaurant = () => {
    const [items, setItems] = useState([]);
    const [value, setValue] = useState(0);
 
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
            // const response = await fetch("http://localhost:5000/menuitem");
            const response = await fetch("http://localhost:3000/menuitem");
            const data = await response.json()
            // console.log(data,"data at top rest");
            let Res_data=data.map((dt)=>{
                // console.log(dt.imagedata.data,"image buffer data");
                try{
                    const byteArray = new Uint8Array(dt.imagedata.data);
 
                    const base64String = arrayBufferToBase64(byteArray);
 
                    const base64Image = `data:image/webp;base64,${base64String}`;
                    // console.log(base64Image,"base64image ");
 
                    dt.imagedata=base64Image
                }catch (error) {
                    console.error('Error fetching products Images:', error);
                  }
 
                  return dt;
            });
            // console.log(Res_data,"Res_Data ")
            setItems(Res_data);
            // console.log(Res_data,"Res_Data as items")
        }
        foodItems();
    }, [])
 
    function handleNext() {
        setValue((prev) => prev + 80)
    }
 
    function handlePrev() {
        setValue((prev) => prev - 80)
    }
 
    return (
        <div className="w-[78%] mx-auto overflow-hidden">
            <div className="flex justify-between mt-3">
                <h1 className="text-2xl font-bold">Top restaurant chains in Vizag</h1>
                <div className="flex gap-3">
                    <div onClick={handlePrev} className={`bg-gray-200 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center`}>
                        <i className=" text-2xl bi bi-arrow-left-short"></i>
                    </div>
                    <div onClick={handleNext} className="bg-gray-200 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center">
                        <i className="text-2xl bi bi-arrow-right-short"></i>
                    </div>
                </div>
            </div>
 
            <div className="flex gap-5 rounded-lg">
                {items.map((item) => (
                    <div style={{ translate: `-${value}%` }} className={`duration-1000`} key={item.id}>
                        <div className="hover:scale-95 duration-300 max-w-sm bg-white mt-5 dark:bg-gray-800 dark:border-gray-700" style={{ width: "285px" }}>
                            {/* Use Link with the restaurant's id */}
                            <Link to={`/hotel-detail/${item.menuItemID}`}>
                                <img className="rounded-2xl object-cover" src={item.imagedata} alt={item.name} style={{ width: "300px", height: "200px" }} />
                            </Link>
                            <Link to={`/hotel-detail/${item.menuItemID}`}>
                            <div className="mt-3 text-start">
                                <h5 className="mb-2 text-lg leading-3 font-bold text-gray-900 dark:text-white">{item.name}</h5>
                                <div className="flex gap-1">
                                    <i className="fi fi-sr-circle-star text-green-600"></i>
                                    <span>{item.rating}</span>
                                    <span>.</span>
                                    <span>{item.deliverytime}</span>
                                </div>
                                <div className="flex flex-col text-gray-800">
                                    <span>{item.type}</span>
                                    <span>{item.place}</span>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
 
            <hr className="mt-10 mb-10 width-2px" />
        </div>
    );
}
 
 