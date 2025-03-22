import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export  function Login() {
  const navigate = useNavigate();
  const closeHandler=()=>{
  
    navigate("/")

  }
  return (
    <div className="fixed inset-0 bg-opacity-10 flex justify-end z-50">
      <div className="w-[37%] bg-white h-full shadow-lg flex flex-col">
        <div className="flex  items-center p-4 pl-10 pt-7">
          <button onClick={()=>closeHandler()}>
            <MdClose className="text-2xl text-gray-600 hover:text-red-500" />
          </button>
        </div>
        <div className="flex">
          <div className="grid grid-cols-1">
            <h1 className="text-start pl-10 font-semibold text-3xl">Login</h1>
            <p className="text-start font-bold text-sm pl-10">or <span className="text-red-500"> create an account</span></p>
            <hr className="w-10 ml-10 mt-2 h-1 bg-gray-800" />
          </div>
          <div>
            <img className="h-24 pl-40" src="../../../assets/images/img.avif" alt="" />
          </div>
        </div>
        <div className="flex p-2 text-start pl-10 mt-5">
          <input type="text" placeholder="Phone number" className="w-[75%] px-4 py-5 border border-gray-300 rounded-sm" />
        </div>
        <div className="flex p-2 text-start pl-10">
          <input type="text" placeholder="Name" className="w-[75%] px-4 py-5 border border-gray-300 rounded-sm" />
        </div>
        <div className="flex p-2 text-start pl-10">
          <input type="text" placeholder="Email" className="w-[75%] px-4 py-5 border border-gray-300 rounded-sm" />
        </div>
        <div className="text-start mt-4 pl-10 ">
          <button type="button" className="text-white pl-40 w-[74%] px-4 py-4 font-bold bg-red-500 text-sm px-5 py-2.5 inline-flex items-center">
            LOGIN
          </button>
          <p className="text-xs font-bold">By clicking on Login, I accept the Terms & Conditions & Privacy<br /> Policy</p>
        </div>
      </div>
    </div>
  );
}



// import { MdClose } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

// export function Login({ setCartOpen }) {
//   const navigate = useNavigate();

//   const closeHandler = () => {
//     setCartOpen(false);  // Close the modal when clicking the close button
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end items-center z-50" >
//       {/* Container for the modal */}
//       <div className="w-[35%] bg-white bg-opacity-90 h-full shadow-lg flex flex-col">
//         <div className="flex items-center justify-between p-4">
//           <button onClick={closeHandler}>
//             <MdClose className="text-2xl text-gray-600 hover:text-red-500" />
//           </button>
//         </div>
//         <div className="flex">
//           <div className="grid grid-cols-1">
//             <h1 className="text-start pl-10 font-semibold text-3xl">Login</h1>
//             <p className="text-start font-bold text-sm pl-10">
//               or <span className="text-red-500">create an account</span>
//             </p>
//             <hr className="w-10 ml-10 mt-2 h-1 bg-gray-800" />
//           </div>
//           <div>
//             <img className="h-24 pl-40" src="../../../assets/images/img.avif" alt="" />
//           </div>
//         </div>
//         <div className="flex p-2 text-start pl-10 mt-5">
//           <input type="text" placeholder="Phone number" className="w-[75%] px-4 py-5 border border-gray-300 rounded-sm" />
//         </div>
//         <div className="flex p-2 text-start pl-10">
//           <input type="text" placeholder="Name" className="w-[75%] px-4 py-5 border border-gray-300 rounded-sm" />
//         </div>
//         <div className="flex p-2 text-start pl-10">
//           <input type="text" placeholder="Email" className="w-[75%] px-4 py-5 border border-gray-300 rounded-sm" />
//         </div>
//         <div className="text-start mt-4 pl-10">
//           <button type="button" className="text-white pl-40 w-[74%] px-4 py-4 font-bold bg-red-500 text-sm">
//             LOGIN
//           </button>
//           <p className="text-xs font-bold">
//             By clicking on Login, I accept the Terms & Conditions & Privacy Policy
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
