import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../../../../context/CartContext"

export const Recommended = ({item}) => {
     const {addToCart, cartList} = useCart();
    const [items, setItems] = useState([]);
    const [show, setShow] = useState(false);
    const [dropdownState, setDropDownState] = useState("block");

    useEffect(() => {
        async function foodItems() {
            const response = await fetch("http://localhost:8080/topRestaurants");
            const data = await response.json()
            setItems(data);
        }
        foodItems();
    }, [])
    const dropDownHandler = () => {
        setShow(!show)

    }

    return (
        <>
            <div className="p-5 w-[50%] mx-auto flex justify-between">
                <div>
                    <Link href="#">
                        <h5 className="mb-2 text-2xl text-start font-bold tracking-tight text-gray-900 dark:text-white">Recommended (5)</h5>
                    </Link>
                </div>
                <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                    <button onClick={() => dropDownHandler()} type="button" className="text-lg flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                        <span className="text-lg text-slate-900 dark:text-white hover:text-orange-500 pr-10 mr-30"></span>


                        {!show && <svg data-accordion-icon onClick={() => setDropDownState("hidden")} className="rotate-180 w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>}
                        {show && <svg data-accordion-icon onClick={() => setDropDownState("block")} className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>}
                    </button>
                </div>
            </div>
            <div>{items.map((item) => (

                <div key={item.id} className={`w-[50%] mx-auto flex justify-between ${dropdownState}`}>

                    <div className="text-start text-lg">
                        <i className="fi fi-bs-dot-circle text-green-600"></i>
                        <p className="font-bold">{item.name}</p>
                        <span><i className="fi fi-sr-indian-rupee-sign text-xs"></i>{item.price}</span>
                        <p className="text-sm">Soft and fluffy naan tastes amazing when paired with a gravy.</p>
                    </div>
                    <div className="mb-10 relative">
                        <img className=" rounded-xl object-cover" src={item.image} alt="" style={{ width: "180px", height: "150px" }} />
                        <button type="button" onClick={() => addToCart(item)} class="absolute right-8 pl-8 pr-8  -bottom-5 text-green-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">ADD</button>
                    </div>

                </div>
            ))}
            </div>
        </>
    )
}
