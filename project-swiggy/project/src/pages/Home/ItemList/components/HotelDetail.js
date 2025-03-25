// import { Link } from "react-router-dom";
// import { useState } from "react";

// export const HotelDetail = () => {
//     const [value, setValue] = useState(0);

//     function handleNext() {
//         setValue((prev) => prev + 80)
//     }

//     function handlePrev() {
//         setValue((prev) => prev - 80)
//     }
//     return (
//         <>
//             <nav className="flex w-[50%] mx-auto text-xs mt-5" aria-label="Breadcrumb">
//                 <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
//                     <li className="inline-flex items-center">
//                         <Link to="/" class="inline-flex items-center font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">

//                             Home /
//                         </Link>
//                     </li>
//                     <li>
//                         <div className="flex items-center">
//                             <Link to="#" className="ms-1 font-medium text-gray-500 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects /</Link>
//                         </div>
//                     </li>
//                     <li aria-current="page">
//                         <div className="flex items-center">
//                             <span className="ms-1 font-medium text-gray-700 md:ms-2 dark:text-gray-400">Hotel Sai Nath & Sai Restaurant</span>
//                         </div>
//                     </li>
//                 </ol>
//             </nav>
//             <div className="w-[50%] mx-auto mt-10 overflow-hidden">
//                 <h1 className="text-2xl text-start font-bold">Hotel Sai Nath & Sai Restaurant</h1>
//                 <div>
//                     <div className="text-start mt-5 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
//                         <div className="flex">
//                             <i className="fi fi-sr-circle-star text-green-600 text-lg text-start pr-2"></i>
//                             <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">4.3 (458 ratings)
//                                 •
//                                 ₹100 for two</h5>
//                         </div>

//                         <Link to="#">
//                             <p className="mb-2 text-sm font-semibold tracking-tight text-red-500 underline dark:text-white">North Indian,Chinese</p>
//                         </Link>
//                         <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
//                         <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Outlet <span className="text-gray-400 pl-2 font-semibold text-sm">Mohan Nagar</span></h5>
//                         <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">50-55 mins</h5>
//                     </div>
//                 </div>
//             </div>
//             <div className="w-[50%] mx-auto mt-10">
//                 <div className="flex  justify-between mt-3">
//                     <h1 className="text-2xl font-bold">Deals for you</h1>

//                     <div className="flex gap-3">
//                         <div onClick={handlePrev} className={`bg-gray-200 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center`}>
//                             <i class=" text-2xl bi bi-arrow-left-short"></i>
//                         </div>
//                         <div onClick={handleNext} className="bg-gray-200 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center">
//                             <i class="text-2xl bi bi-arrow-right-short"></i>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex gap-5">
//                     <div className="flex mt-8 h-20 items-center p-6 text-start bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
//                         <i className="fi fi-sr-badge-percent text-red-500  text-5xl"></i>
//                         <div className="pl-5">
//                             <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Flat ₹150 Off</h5>
//                             <p class="mb-3 text-sm  font-normal text-gray-500 dark:text-gray-400">USE SAVERDEAL</p>
//                         </div>

//                     </div>

//                     <div className="flex mt-8 h-20 items-center p-6 text-start bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
//                         <i className="fi fi-sr-badge-percent text-red-500  text-5xl"></i>
//                         <div className="pl-5 ">
//                             <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Flat ₹200 Off</h5>
//                             <p class="mb-3  text-sm  font-normal text-gray-500 dark:text-gray-400">USE CELEBRATIONS</p>
//                         </div>

//                     </div>
//                     <div className="flex mt-8 h-20 items-center p-6 text-start bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
//                         <i className="fi fi-sr-badge-percent text-red-500  text-5xl"></i>
//                         <div className="pl-5">
//                             <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Flat ₹150 Off</h5>
//                             <p class="mb-3 text-sm font-normal text-gray-500 dark:text-gray-400">USE SAVERDEAL</p>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <div className="w-[50%] mx-auto relative mt-10">
//                 <Link to="/search">
//                     <input
//                         type="text"
//                         placeholder="Search for restaurants and food"
//                         className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg" />

//                         <button className="absolute right-0 top-0 h-full px-6 ">
//                             <i class="fi fi-rs-search"></i>
//                         </button>
//                 </Link>

//             </div>
//             <div className="mt-5 w-[50%] mx-auto text-start">
//                 <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-green-600 focus:outline-none bg-white rounded-full border border-gray-200 ">Pure Veg</button>
//                 <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 ">Bestseller</button>
//                 <hr className="mt-5 mb-10" />
//             </div>
//             </div>
//         </>
//     )
// }







import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { TopPicks } from "./TopPicks";
import { Recommended } from "./Recommended";
import { Header } from "../../../../components";

export const HotelDetail = () => {
    const [item, setItem] = useState(null);
    const [value, setValue] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchRestaurantDetail = async () => {
            try {
                setLoading(true); 
                // const response = await fetch(`http://localhost:8080/topRestaurants/${id}`);
                // const response = await fetch(` http://localhost:3000/restaurant/${restaurantID}`);
                const response = await fetch(`http://localhost:3000/restaurant/${id}`);
               
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setItem(data); 
            } catch (error) {
                setError(error.message); 
            } finally {
                setLoading(false); 
            }
        };

        fetchRestaurantDetail();
    }, [id]); 

    if (loading) {
        return <div>Loading...</div>; 
    }

    if (error) {
        return <div>Error: {error}</div>; 
    }

    if (!item) {
        return <div>No restaurant found</div>; 
    }
    function handleNext() {
        setValue((prev) => prev + 80)
    }

    function handlePrev() {
        setValue((prev) => prev - 80)
    }
    console.log(item[0].name,"data_____________")
    return (
        <>
        <Header />
            <nav className="flex w-[50%] mx-auto text-xs mt-5" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <Link to="/" className="inline-flex items-center font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            Home /
                        </Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <Link to="#" className="ms-1 font-medium text-gray-500 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects /</Link>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <span className="ms-1 font-medium text-gray-700 md:ms-2 dark:text-gray-400">{item.name}</span>
                        </div>
                    </li>
                </ol>
            </nav>
             {item.map((items,index)=>(
                <div key={index} className="w-[50%] mx-auto mt-10 overflow-hidden">
                <h1 className="text-2xl text-start font-bold">{items.name}</h1>
                <div className="text-start mt-5 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex">
                        <i className="fi fi-sr-circle-star text-green-600 text-lg text-start pr-2"></i>
                        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">{items.rating} • ₹100 for two</h5>
                    </div>
                    <p className="mb-2 text-sm font-semibold tracking-tight text-red-500 underline dark:text-white">{items.name}</p>
                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Outlet <span className="text-gray-400 pl-2 font-semibold text-sm">{items.place}</span></h5>
                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">{items.deliverytime}</h5>
                </div>
            </div>
             ))}
            
            <div className="w-[50%] mx-auto mt-10">
                <div className="flex  justify-between mt-3">
                    <h1 className="text-2xl font-bold">Deals for you</h1>

                    <div className="flex gap-3">
                        <div onClick={handlePrev} className={`bg-gray-200 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center`}>
                            <i class=" text-2xl bi bi-arrow-left-short"></i>
                        </div>
                        <div onClick={handleNext} className="bg-gray-200 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center">
                            <i class="text-2xl bi bi-arrow-right-short"></i>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="flex mt-8 h-20 items-center p-6 text-start bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <i className="fi fi-sr-badge-percent text-red-500  text-5xl"></i>
                        <div className="pl-5">
                            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Flat ₹150 Off</h5>
                            <p class="mb-3 text-sm  font-normal text-gray-500 dark:text-gray-400">USE SAVERDEAL</p>
                        </div>

                    </div>

                    <div className="flex mt-8 h-20 items-center p-6 text-start bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <i className="fi fi-sr-badge-percent text-red-500  text-5xl"></i>
                        <div className="pl-5 ">
                            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Flat ₹200 Off</h5>
                            <p class="mb-3  text-sm  font-normal text-gray-500 dark:text-gray-400">USE CELEBRATIONS</p>
                        </div>

                    </div>
                    <div className="flex mt-8 h-20 items-center p-6 text-start bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <i className="fi fi-sr-badge-percent text-red-500  text-5xl"></i>
                        <div className="pl-5">
                            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Flat ₹150 Off</h5>
                            <p class="mb-3 text-sm font-normal text-gray-500 dark:text-gray-400">USE SAVERDEAL</p>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <div className="w-[50%] mx-auto relative mt-10">
                    <Link to="/search">
                        <input
                            type="text"
                            placeholder="Search for restaurants and food"
                            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg" />

                        <button className="absolute right-0 top-0 h-full px-6 ">
                            <i class="fi fi-rs-search"></i>
                        </button>
                    </Link>

                </div>
                <div className="mt-5 w-[50%] mx-auto text-start">
                    <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-green-600 focus:outline-none bg-white rounded-full border border-gray-200 ">Pure Veg</button>
                    <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 ">Bestseller</button>
                    <hr className="mt-5 mb-10" />
                </div>
            </div>
            {/* Add more restaurant details and related content here */}
            <TopPicks />
            <Recommended />
        </>

    );

};
