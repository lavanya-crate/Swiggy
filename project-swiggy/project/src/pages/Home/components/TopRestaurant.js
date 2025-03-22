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

    useEffect(() => {
        async function foodItems() {
            const response = await fetch("http://localhost:5000/menuitem");
            const data = await response.json()
            setItems(data);
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
                            <Link to={`/hotel-detail/${item.id}`}>
                                <img className="rounded-2xl object-cover" src={item.image} alt={item.name} style={{ width: "300px", height: "200px" }} />
                            </Link>
                            <Link to={`/hotel-detail/${item.id}`}>
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
