
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("/");
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const postResponse = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const responseData = await postResponse.json(); // Parse the response

     
      if (postResponse.ok) {
        console.log(responseData,"kshdfkhsg");
        
        localStorage.setItem("userId",responseData.user.userID);
        localStorage.setItem("usercartId",responseData.cart.cartId);


          navigate('/'); 
        
      } else {
        setError(responseData.message); // Handle error if response is not ok
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } 
    
  };

  return (
    <div className="fixed inset-0 bg-opacity-10 flex justify-end z-50">
      <div className="w-[37%] bg-white h-full shadow-lg flex flex-col">
        <div className="flex items-center p-4 pl-10 pt-7">
          <button onClick={closeHandler}>
            <MdClose className="text-2xl text-gray-600 hover:text-red-500" />
          </button>
        </div>
        <div className="flex">
          <div className="grid grid-cols-1">
            <h1 className="text-start pl-10 font-semibold text-3xl">Login</h1>
            <p className="text-start font-bold text-sm pl-10">
              or <span className="text-red-500">create an account</span>
            </p>
            <hr className="w-10 ml-10 mt-2 h-1 bg-gray-800" />
          </div>
          <div>
            <img className="h-24 pl-40" src="../../../assets/images/img.avif" alt="" />
          </div>
        </div>

       
        <form onSubmit={handleLogin}>
          <div className="flex p-2 text-start pl-10">
            <input
              type="email"
              placeholder="Email"
              className="w-[75%] px-4 py-5 border border-gray-300 rounded-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="flex p-2 text-start pl-10">
            <input
              type="password"
              placeholder="Password"
              className="w-[75%] px-4 py-5 border border-gray-300 rounded-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Set password value to state
            />
          </div>
          {error && <div className="text-red-500 pl-10">{error}</div>}
          <div className="text-start mt-4 pl-10 ">
            <button
              type="submit"
              className="text-white pl-40 w-[74%] px-4 py-4 font-bold bg-red-500 text-sm inline-flex items-center"
            >
              CONTINUE
            </button>
            <p className="text-xs font-bold">
              By clicking on Login, I accept the Terms & Conditions & Privacy
              <br />
              Policy
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}


