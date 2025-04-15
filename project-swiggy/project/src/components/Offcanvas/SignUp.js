// import { MdClose } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import { useEffect,useState } from "react";

// export  function SignUp() {
//     const [error, setError] = useState('');
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isUsername, setIsUsername] = useState(true);
//   const navigate = useNavigate();
//   const closeHandler=()=>{
//     navigate("/")
//   }

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
// };

// const handleEmailChange = (event) => {
//     setEmail(event.target.value);
// };

// const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
// };


// async function handleRegister(event) {
//     event.preventDefault();
//     setError('');

//     try {
//         const newUser = { username: username, email, password_hash: password };

//         const requestPost = {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(newUser)
//         };

//         const postResponse = await fetch("http://localhost:3000/register", requestPost);

//         if (!postResponse.ok) {
//             const responseBody = await postResponse.json();
         
//             setError(responseBody?.message || "Failed to register user");
//             return;
//         }

//         const newUserData = await postResponse.json();
//         console.log("Registration successful:", newUserData);
//         navigate('/login');
//     } catch (error) {
//         console.error("Error during registration:", error);
//         setError(error.message || 'An error occurred while registering. Please try again.');
//     }
// }


//   return (
//     <div className="fixed inset-0 bg-opacity-10 flex justify-end z-50">
//       <div className="w-[37%] bg-white h-full shadow-lg flex flex-col">
//         <div className="flex  items-center p-4 pl-10 pt-7">
//           <button onClick={()=>closeHandler()}>
//             <MdClose className="text-2xl text-gray-600 hover:text-red-500" />
//           </button>
//         </div>
//         <div className="flex">
//           <div className="grid grid-cols-1">
//             <h1 className="text-start pl-10 font-semibold text-3xl">Sign up</h1>
//             <p className="text-start font-bold text-sm pl-10">or <span className="text-red-500"> create an account</span></p>
//             <hr className="w-10 ml-10 mt-2 h-1 bg-gray-800" />
//           </div>
//           <div>
//             <img className="h-24 pl-40" src="../../../assets/images/img.avif" alt="" />
//           </div>
//         </div>
//         <form onSubmit={handleRegister}>
//         <div className="flex p-2 text-start pl-10 mt-5">
//           <input onChange={handleUsernameChange} type="text" placeholder="Username" className="w-[75%] px-4 py-5 border border-gray-300 rounded-sm" />
//         </div>
//         <div className="flex p-2 text-start pl-10">
//           <input onChange={handleEmailChange} type="text" placeholder="Email" className="w-[75%] px-4 py-5 border border-gray-300 rounded-sm" />
//         </div>
//         <div className="flex p-2 text-start pl-10">
//           <input onChange={handlePasswordChange} type="text" placeholder="Password" className="w-[75%] px-4 py-5 border border-gray-300 rounded-sm" />
//         </div>
//         <div className="text-start mt-4 pl-10">
          
//           <button type="submit" className="text-white pl-40 w-[74%] px-4 py-4 font-bold bg-red-500 text-sm px-5 py-2.5 inline-flex items-center" disabled={!isUsername || email !== password}>
//         LOGIN
//           </button>
        
//           <p className="text-xs font-bold">By clicking on Login, I accept the Terms & Conditions & Privacy<br /> Policy</p>
//         </div>
//         </form>
//       </div>
//     </div>
//   );
// }

import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function SignUp() {
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUsername, setIsUsername] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [dataa, setData] = useState([])
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("/");
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setIsUsername(event.target.value.trim() !== '');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const email = dataa.find((user) => user.email === event.target.value);
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    if(email){
      setError('This email is already registered');
     
  }

  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPassword(password);
    setIsPasswordValid(password.length >= 6); 
  };

  useEffect(() => {
    const fetchData= async () => {
      try {
        const response = await fetch("http://localhost:3000/user/email");
    const data = await response.json();
    console.log(data, "data");
    setData(data);
      }catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData()
  }, []);

  const handleRegister = async (event) => {
    event.preventDefault();
    // setError('Failed to register user');
    try {
      const newUser = { username, email, password };
  console.log(newUser); 
  

      const requestPost = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      };

      const postResponse = await fetch("http://localhost:3000/user", requestPost);

      if (!postResponse.ok) {
        const responseBody = await postResponse.json();
        console.log(responseBody, "responsebody"); 
        setError("Failed to register user");
        return;
      }

      const newUserData = await postResponse.json();
      console.log("Registration successful:", newUserData);
      navigate('/login');

    } catch (error) {
      console.error("Error during registration:", error);
      setError(error.message || 'An error occurred while registering. Please try again.');
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
            <h1 className="text-start pl-10 font-semibold text-3xl">Sign up</h1>
            <p className="text-start font-bold text-sm pl-10">or <span className="text-red-500"> create an account</span></p>
            <hr className="w-10 ml-10 mt-2 h-1 bg-gray-800" />
          </div>
          <div>
            <img className="h-24 pl-40" src="../../../assets/images/img.avif" alt="" />
          </div>
        </div>
       
        <form onSubmit={handleRegister}>
          <div className="flex p-2 text-start pl-10 mt-5">
            <input
              onChange={handleUsernameChange}
              type="text"
              placeholder="Username"
              className="w-[75%] px-4 py-5 border border-gray-300 rounded-sm"
              value={username}
            />
          </div>
          <div className="flex p-2 text-start pl-10">
            <input
              onChange={handleEmailChange}
              type="text"
              placeholder="Email"
              className="w-[75%] px-4 py-5 border border-gray-300 rounded-sm"
              value={email}
            />

            
            {/* {!isEmailValid && <span className="text-red-500 text-xs pl-2">Invalid email</span>} */}
          </div>
          
          <div className="flex p-2 text-start pl-10">
            <input
              onChange={handlePasswordChange}
              type="password"
              placeholder="Password"
              className="w-[75%] px-4 py-5 border border-gray-300 rounded-sm"
              value={password}
            />
            
          </div>
          {!isPasswordValid && <span className="text-red-500 text-xs pl-2">Password must be at least 6 characters</span>}
          {error && <div className="text-red-500 pl-10">{error}</div>}
          <div className="text-start mt-4 pl-10">
            <button
              type="submit"
              className="text-white pl-40 w-[74%] px-4 py-4 font-bold bg-red-500 text-sm px-5 py-2.5 inline-flex items-center"
            >
              SIGN UP
            </button>
            <p className="text-xs font-bold">
              By clicking on Sign Up, I accept the Terms & Conditions & Privacy<br /> Policy
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}


// import { MdClose } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import { useEffect,useState } from "react";
// import { Link } from "react-router-dom";

// export  function SignUp() {
//     const [isLogin, setIsLogin] = useState(false);
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//   const navigate = useNavigate();
//   const closeHandler=()=>{
//     navigate("/")
//   }
  

// //   const handleUsernameChange = (event) => {
// //     setUsername(event.target.value);
// // };

// // const handleEmailChange = (event) => {
// //     setEmail(event.target.value);
// // };

// // const handlePasswordChange = (event) => {
// //     setPassword(event.target.value);
// // };

//   return (
//     <div className="fixed inset-0 bg-opacity-10 flex justify-end z-50">
//       <div className="w-[37%] bg-white h-full shadow-lg flex flex-col">
//         <div className="flex  items-center p-4 pl-10 pt-7">
//           <button onClick={()=>closeHandler()}>
//             <MdClose className="text-2xl text-gray-600 hover:text-red-500" />
//           </button>
//         </div>
//         <div className="flex">
//           <div className="grid grid-cols-1">
//             <h1 className="text-start pl-10 font-semibold text-3xl">Sign up</h1>
//             <p className="text-start font-bold text-sm pl-10">or <span className="text-red-500"> create an account</span></p>
//             <hr className="w-10 ml-10 mt-2 h-1 bg-gray-800" />
//           </div>
//           <div>
//             <img className="h-24 pl-40" src="../../../assets/images/img.avif" alt="" />
//           </div>
//         </div>
//         <div className="flex p-2 text-start pl-10 mt-5">
//           <input  value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" className="w-[75%] px-4 py-5 border border-gray-300 rounded-sm" />
//         </div>
//         <div className="flex p-2 text-start pl-10">
//           <input  value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="w-[75%] px-4 py-5 border border-gray-300 rounded-sm" />
//         </div>
//         <div className="flex p-2 text-start pl-10">
//           <input  value={password}  onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password" className="w-[75%] px-4 py-5 border border-gray-300 rounded-sm" />
//         </div>
//         <div className="text-start mt-4 pl-10 ">
//            <Link to="/login">
//           <button type="submit" className="text-white pl-40 w-[74%] px-4 py-4 font-bold bg-red-500 text-sm px-5 py-2.5 inline-flex items-center">
//         LOGIN
//           </button>
//           </Link>
//           <p className="text-xs font-bold">By clicking on Login, I accept the Terms & Conditions & Privacy<br /> Policy</p>
//         </div>
//       </div>
//     </div>
//   );
// }



