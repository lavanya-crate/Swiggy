import { Link } from "react-router-dom";
import Logo from "../../assets/images/swiggy-logo.png";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
// import {Login} from "../Offcanvas/Login";

export const Header = () => {
  const { cartList } = useCart();
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <header>

      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-lg shadow-gray-200/50 dark:shadow-lg dark:shadow-gray-500/50 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-12 rounded-xl" alt="swiggy" />
            <div className="flex">
              <Link to="/other">
              <div className="flex">
              <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white px-7 underline underline-offset-8  leading-loose">Other</span>
              <svg className="w-3.5 h-4 mt-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
              </div>
              </Link>
            </div>

          </Link>
          <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 pr-6 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li> 
                <Link to="/" className="block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:hover:text-red-500 md:p-0 md:dark:text-red-500 dark:bg-red-500 md:dark:bg-transparent text-bold bi bi-bag font-bold" aria-current="page"><span className="px-3">Swiggy Corporate</span></Link>
              </li>
              <li>
                <Link to="/search" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent bi bi-search font-bold"><span className="px-3">Search</span></Link>
              </li>
              <li>
                <div className="relative">
                  <Link to="/offer" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent bi bi-patch-plus font-bold "><span className="px-3">Offers</span></Link>
                  <span className="absolute -top-2 -right-2 text-[10px] font-weight: 700 text-orange-500">NEW</span>
                </div>
              </li>
              <li>
                <Link to="/help" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent bi bi-question-circle font-bold"><span className="px-3">Help</span></Link>
              </li>
              <li>
                <Link to="/login" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent bi bi-person font-bold" onClick={()=>setCartOpen(true)}><span className="px-3">Sign In</span></Link>
              </li>
              <li>
                <div className="relative">
                <Link to="/cart" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent bi bi-cart-check font-bold"><span className="px-3">Cart</span></Link>
                <span className="text-white text-sm absolute -top-2 left-3 bg-orange-500 px-1 rounded-full ">{cartList.length}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* {isCartOpen && <Login setCartOpen={setCartOpen} />} */}
    </header>
  )
}



// import { Link } from "react-router-dom";
// import Logo from "../../assets/images/swiggy-logo.png";
// import { useState } from "react";
// import { useCart } from "../../context/CartContext";
// import { Login } from "../Offcanvas/Login";  // Import the Login modal

// export const Header = () => {
//   const { cartList } = useCart();
//   const [isCartOpen, setCartOpen] = useState(false);

//   return (
//     <header>
//       <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-lg shadow-gray-200/50 dark:shadow-lg dark:shadow-gray-500/50">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//             <img src={Logo} className="h-12 rounded-xl" alt="swiggy" />
//             <div className="flex">
//               <Link to="/other">
//                 <div className="flex">
//                   <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white px-7 underline underline-offset-8 leading-loose">
//                     Other
//                   </span>
//                   <svg className="w-3.5 h-4 mt-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
//                   </svg>
//                 </div>
//               </Link>
//             </div>
//           </Link>

//           <button
//             onClick={() => setCartOpen(true)}
//             className="text-white px-4 py-2 bg-red-500 rounded"
//           >
//             Sign In
//           </button>
//         </div>
//       </nav>

//       {/* Off-canvas Login modal */}
//       {isCartOpen && <Login setCartOpen={setCartOpen} />}
//     </header>
//   );
// };
