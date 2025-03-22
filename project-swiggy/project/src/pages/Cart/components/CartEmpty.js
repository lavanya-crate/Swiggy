import cartImage from "../../../assets/images/cart-img.avif";
import {Link} from "react-router-dom";
import { CartHeader } from "./CartHeader";

export const CartEmpty = () => {
  return (
    <>
    <CartHeader />

    <div className="justify-items-center mt-20">
      <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img className="" src={cartImage} alt="" style={{ width: "300px" }}/>
        </Link>
        <div className="p-5">
          <p className="mb-3 font-semibold text-2xl text-gray-700 dark:text-gray-400">Your cart is empty</p>
          <p className="mb-3 font-medium text-sm text-gray-700 dark:text-gray-400">You can go to home page to view more restaurants</p>
          <Link to="#" className="inline-flex items-center text-medium mt-5 px-3 py-2 font-medium text-center text-white bg-red-500  hover:shadow-lg shadow-indigo-500/50 ">
          SEE RESTAURANTS NEAR YOU
          </Link>
        </div>
        <button type="button" className="mt-20  text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><span><i className="fi fi-sr-exclamation mr-2 text-red-500 text-xs"></i></span>Oops! Something wrong</button>
      </div>
    </div>
    </>
  )
}
