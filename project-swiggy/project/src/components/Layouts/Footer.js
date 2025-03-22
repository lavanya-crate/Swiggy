import Logo from "../../assets/images/swiggy-logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
    <div className="bg-gray-100">
      <hr className="w-[75%]  mx-auto border border-gray-500"></hr>
      <div className="w-[70%] mx-auto pt-4 mb-10">
        <div className="flex gap-5">
          <div className="flex mt-10">
            <h1 className="text-2xl font-bold">For better experience,download the Swiggy app now</h1>
          </div>
          <div className="flex gap-5 mt-5">
            <img className="" src="/assets/images/googlepay.avif" alt="" style={{ width: "200px", height: "60px" }} />
            <img src="/assets/images/appstore.avif" alt="" style={{ width: "200px", height: "60px" }} />
          </div>
        </div>
      </div>


      <footer className="bg-gray-100 w-[75%] mx-auto bg-white dark:bg-gray-900">
        <div className="bg-gray-100 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex">
            <div className="">
              <div className="mb-3">
                <Link to="#" class="flex items-center">
                  <img src={Logo} className="h-12 rounded-xl" alt="swiggy" />
                  <span className="self-center text-3xl pl-4 text-red-500 font-extrabold whitespace-nowrap dark:text-white">Swiggy</span>
                </Link>
              </div>
              <div>
                <span className="text-sm text-gray-500 font-bold sm:text-center">© 2025 <Link to="https://flowbite.com/">Swiggy Limited</Link>
                </span>
              </div>
            </div>
            <div className="container mx-auto px-6 ml-40 md:px-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" >
                <div className="text-left" >
                  <h4 className="font-semibold text-lg mb-4" >Company</h4>
                  <ul className="space-y-2 text-base ">
                    <li className="mr-[70px]">About us</li>
                    <li>Swiggy Corporate</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Swiggy One</li>
                    <li>Swiigy Instamart</li>
                    <li>Swiggy Dineout</li>
                    <li>Swiggy Genie</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-left font-semibold text-lg mb-4">Contact us</h4>
                  <ul className="space-y-2 text-left">
                    <li>Help & Support</li>
                    <li>Partner with us</li>
                    <li>Ride with us</li>
                  </ul>

                  <div className="text-left mt-20">
                    <h4 className="font-semibold text-lg mb-4">Legal</h4>
                    <ul className="space-y-2">
                      <li>Terms & Conditions</li>
                      <li>Cookie Policy</li>
                      <li>Privacy Policy</li>
                      <li>Investor Relations</li>
                    </ul>
                  </div>
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-4">Available in:</h4>
                  <ul className="space-y-2">
                    <li>Bangolore</li>
                    <li>My Orders</li>
                    <li>Gurgaon</li>
                    <li>Hyderabad</li>
                    <li>Delhi</li>
                    <li>Mumbai</li>
                    <li>Pune</li>
                    <button type="button" class="py-2 pl-2 pr-2 mb-2 mr-7 mb-4 text-sm  focus:outline-none bg-gray-100 rounded-lg border border-gray-300">679 cities <span><i class="fi fi-rr-angle-small-down ml-2"></i></span></button>
                  </ul>
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-4">Life at Swiggy</h4>
                  <ul className="space-y-2">
                    <li>About Us</li>
                    <li>Explore with Swiggy</li>
                    <li>Swiggy News</li>
                    <li>Snackables</li>
                  </ul>
                  <div className="text-left mt-20">
                    <h4 className="font-semibold text-lg mb-4">Social Links</h4>
                    <ul className="flex gap-3">
                      <li><i class="fi fi-brands-linkedin"></i></li>
                      <li><i class="fi fi-brands-instagram"></i></li>
                      <li><i class="fi fi-brands-facebook"></i></li>
                      <li><i class="fi fi-brands-pinterest"></i></li>
                      <li><i class="fi fi-brands-twitter"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}
