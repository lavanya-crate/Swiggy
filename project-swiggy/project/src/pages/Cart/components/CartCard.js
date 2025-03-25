import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

export const CartCard = ({ item }) => {
    const { removeFromCart } = useCart();
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const {id} = useParams

useEffect(() => {
        async function foodItems() {
            const response = await fetch(`http://localhost:3000/image${id}`);
            const data = await response.json()
            setItems(data);
        }
        foodItems();
    }, [id])


    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount( count - 1);
        } else {
            removeFromCart(item);
        }
    };

    return (

        <div className=" mx-auto p-6 mb-3 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
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
            <div className="text-start mt-3 flex items-center">
                <i className="fi fi-bs-dot-circle text-green-600 text-sm"></i>
                <p className="pl-5 text-sm font-semibold">{item.name}</p>
                <button type="button" className="ml-4 text-green-600 bg-white border pb-1 font-medium px-2 dark:bg-gray-800 dark:text-white">
                    <span onClick={decrement} className="text-2xl pr-3">-</span>
                    1
                    <span onClick={increment} className="text-xl pl-3">+</span>
                </button>
                <span><i className="fi fi-sr-indian-rupee-sign text-xs pl-10"></i>{item.price}</span>
            </div>
        </div>

    );
};
