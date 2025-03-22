import { Link } from "react-router-dom";
import  Logo  from "../../../assets/images/swiggy-logo.png";

export const OfferHeader = () => {
  return (
    <header>

      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-lg shadow-gray-200/50 dark:shadow-lg dark:shadow-gray-500/50 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-12 rounded-xl" alt="swiggy" />
            <div className="flex">
              <Link to="/">
              <div className="flex">
              <span className="self-center text-2xl font-extrabold whitespace-nowrap dark:text-white text-red-500">Swiggy</span>
              </div>
              </Link>
              <div>
              <Link to="/" className="block py-2 px-3 text-gray-600 font-bold text-lg "><i class="fi fi-ss-location-arrow pl-10 text-red-500"></i><span className="px-3">Setup your precise location</span><i class="fi fi-rr-angle-small-down text-red-500"></i></Link>
              </div>
            </div>

          </Link>
          <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-medium  md:p-0 border border-gray-100  bg-gray-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <div className="w-[80%] mx-auto relative">
                <input
                    type="text"
                    placeholder="Search for restaurants and food"
                    className="w-full mr-20 px-20 py-3 bg-gray-200 border border-gray-300 rounded-xl"
                />
                <button className="absolute right-0 top-0 h-full px-6 ">
                    <i class="fi fi-rs-search"></i>
                </button>
            </div>
              
              <li>
                <div className="mt-2">  
                <Link to="/"><i className="bi bi-person-fill text-3xl bg-gray-600 rounded-full pl-2 pr-2 pt-1 text-white"></i></Link>
                
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}