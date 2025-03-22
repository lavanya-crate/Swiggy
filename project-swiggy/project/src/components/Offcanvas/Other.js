import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export function Other() {
   const navigate = useNavigate();
   const closeHandler = () => {

      navigate("/")

   }
   return (
      <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-start z-50">
         <div className="w-[37%] bg-white h-full shadow-lg flex flex-col">
            <div className="flex items-center p-4 pl-40 pt-7">
               <button onClick={() => closeHandler()}>
                  <MdClose className="text-2xl text-gray-600 hover:text-red-500" />
               </button>
            </div>

            <div className="flex text-end pl-40 mt-5">
               <input type="text" placeholder="Search for area, street name.." className="w-[85%] px-4 py-3 border border-gray-300 rounded-sm" />
            </div>
            <div className="flex pl-40 text-center">
               <button type="button" className="mt-5 w-[85%] px-5 py-5  border border-gray-300 px-5 py-2.5 inline-flex items-center">
                  <div className="flex gap-3">
                  <div>
                  <i class="fi fi-tr-location-crosshairs"></i>
                  </div>
                  <div className="grid grid-col-1">
                  <span className="font-bold hover:text-red-500">Get current location</span>
                  <span className="text-xs text-start text-gray-600">Using GPS</span>
                  </div>
                    
                  </div>
               </button>
            </div>
         </div>
      </div>
   );
}
