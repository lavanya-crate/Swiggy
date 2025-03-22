import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const OfferCart = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function foodItems() {
            const response = await fetch("http://localhost:8080/onlinedelivey");
            const data = await response.json()
            setItems(data);
        }
        foodItems();
    }, [])

    return (
        <>
            <div className="w-[80%] mx-auto mt-3 mb-10 grid grid-rows-4 gap-5 grid-flow-col flex rounded-2xl">
                {items.map((item) => (

                    <div class="max-w-sm bg-white relative border border-gray-200 rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <Link to="#">
                            <img className="rounded-t-2xl object-cover" src={item.image} alt="" style={{ width: "400px", height: "200px" }} />
                        </Link>
                        <div className="mt-3 pl-4 pb-4 text-start">
                            <Link to="#">
                                <h5 className="absolute left-5 top-40 text-white mb-2 text-lg leading-3 font-bold text-gray-900 dark:text-white">{item.name}</h5>
                                <div className="flex gap-1">
                                    <div className="absolute right-10 top-40 text-white">
                                        <i className="fi fi-sr-circle-star text-green-600 pr-1"></i>
                                        <span>{item.rating}</span>
                                    </div>
                                    <div className="flex">
                                        <span>{item.type}</span>
                                        <span className="pl-40"><i className="fi fi-sr-indian-rupee-sign text-xs"></i>{item.price} for two</span>
                                    </div>
                                </div>
                                <div className="flex text-gray-800">
                                    <span>{item.place}</span>
                                    <span className="pl-40">1 km</span>
                                </div>
                                <div >
                                    <button type="button" className="text-white font-bold bg-green-600 px-1 py-1 mb-2 mt-2 rounded-lg">
                                        <div className="flex">
                                            <div>
                                                <i className="fi fi-ss-badge-percent pr-2 pl-2"></i>
                                                <span>Flat 10% off on walk-in</span>
                                            </div>
                                            <div className="pl-20">
                                                <span>+1 more</span>
                                            </div>
                                        </div>
                                    </button>
                                    <button type="button" className="bg-green-200 text-green-600 px-16 py-1 mb-2 rounded-lg">
                                        <span>Up to 10% off with bank offers</span>
                                    </button>
                                </div>
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
            <div>
                <button type="button" className="py-4 px-20  me-2 mb-2 mr-7 mb-4 text-sm font-bold text-red-400 focus:outline-none bg-white rounded-lg border border-gray-200">Show More <span><i class="fi fi-rr-angle-small-down ml-1"></i></span></button>
            </div>



            <div className="w-[80%] mx-auto  mb-14 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 className="text-start mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Get the Best Offers on Food from Top Restaurants Near You</h5>
                </a>
                <p className="text-start mb-3 font-normal text-gray-700 dark:text-gray-400">Get ready for a delicious adventure packed with unbeatable dining offers at your favorite restaurants. Whether you’re craving a cheesy pizza, a juicy burger, or a delightful bowl of pasta, now is the perfect time to head out and indulge in your favorite meals—while saving big!</p>
                <p className="text-start mb-3 font-normal text-gray-700 dark:text-gray-400"> All the top-rated restaurants and popular eateries are offering  deals that are too good to pass up. From buy-one-get-one-free offers to irresistible combo meals...</p>
                <div className="text-start">
                <Link to="#"className="mb-4 text-sm font-bold text-red-400">Show More <span><i class="fi fi-rr-angle-small-down ml-1"></i></span>
                </Link>
                </div>
            </div>

        </>
    )
}
