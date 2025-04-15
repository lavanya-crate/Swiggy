// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {useParams } from "react-router-dom";
// import { Header } from "../../components/Layouts/Header";

// export const PageSearch = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState({ menuitem: []});
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   // const navigate = useNavigate();
//    const { type } = useParams();


//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };


//   const handleSearch = async () => {
//     if (!searchTerm.trim()) return; 

//     setLoading(true);
//     setError(null);

//     // navigate(`/search?searchTerm=${searchTerm}`);

//     try {
//       const response = await fetch(`http://localhost:3000/search/${type}`);
//       const data = await response.json();

//       if (response.ok) {
//         setResults({
//           menuitem: data.menuitem || [], 

//         });
//       } else {
//         setError("Failed to fetch results.");
//       }
//     } catch (err) {
//       setError("An error occurred while fetching data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {

//     const params = new URLSearchParams(window.location.search);
//     const querySearchTerm = params.get("searchTerm");

//     if (querySearchTerm) {
//       setSearchTerm(querySearchTerm);
//       handleSearch();
//     }
//   }, []);

//   return (
//     <div>
//       <Header />
//       <div className="w-[50%] mx-auto relative mt-10">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleInputChange}
//           placeholder="Search for restaurants and food"
//           className="w-full px-4 py-2 border border-gray-300 rounded-sm"
//         />
//         <button
//           onClick={handleSearch}
//           className="absolute right-0 top-0 h-full px-6 flex items-center justify-center"
//         >
//           <i className="fi fi-rs-search"></i>
//         </button>
//       </div>

//       {loading && <div className="text-center mt-4">Loading...</div>}

//       {error && <div className="text-center mt-4 text-red-500">{error}</div>}

//       <div className="mt-6">
//         <div>
//           {results.menuitem?.length > 0 ? (
//             <ul>
//               {results.menuitem.map((item, index) => (
//                 <li key={index}>{item.name} - {item.type}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>No menu items found.</p>
//           )}
//         </div>

//         {/* <div>
//           <h3 className="text-lg mt-4">Restaurants:</h3>
//           {results.Restaurant?.length > 0 ? (
//             <ul>
//               {results.Restaurant.map((restaurant, index) => (
//                 <li key={index}>{restaurant.name} - {restaurant.place}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>No restaurants found.</p>
//           )}
//         </div> */}
//       </div>
//     </div>
//   );
// };


// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Header } from "../../components/Layouts/Header";

// export const PageSearch = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const[pavan,setPavan]=useState("")
//   const [results, setResults] = useState({ menuitem: [] });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const { type } = useParams();
//   console.log(pavan,"-------------skhgf")
//   const arrayBufferToBase64 = (buffer) => {
//     let binary = "";
//     const bytes = new Uint8Array(buffer);
//     const len = bytes.byteLength;
//     for (let i = 0; i < len; i++) {
//       binary += String.fromCharCode(bytes[i]);
//     }
//     return window.btoa(binary);
//   };

//   useEffect(() => {
//     async function fetchMenuItems() {
//       const response = await fetch(`http://localhost:3000/search/${searchTerm}`);
//       const data = await response.json();
// console.log(data,"amarrrrrrrrrrrrrrrr")
//       const Res_data = data.map((dt) => {
//         try {
//           const byteArray = new Uint8Array(dt.imagedata.data);
//           const base64String = arrayBufferToBase64(byteArray);
//           const base64Image = `data:image/webp;base64,${base64String}`;
//           dt.imagedata = base64Image;
//         } catch (error) {
//           console.error("Error fetching product images:", error);
//         }
//         return dt;
//       });

//       setResults({ menuitem: Res_data });
//     }

//     fetchMenuItems();
//   }, []);


//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const searchSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload on form submit
//     if (searchTerm.trim()) {
//       // Handle search logic here
//       console.log("Searching for:", searchTerm);
//       // Call the search function, or redirect to a search results page
//       // For example:
//       // handleSearch(searchTerm);
//     } else {
//       console.log("Please enter a search term");
//     }
//   };
//   // const handleSearch = async () => {
//   //   if (!searchTerm.trim()) return;

//   //   setLoading(true);
//   //   setError(null);

//   //   try {
//   //     const response = await fetch(`http://localhost:3000/search/${type}?searchTerm=${searchTerm}`);
//   //     const data = await response.json();

//   //     if (response.ok) {
//   //       setResults({
//   //         menuitem: data.menuitem || [],
//   //       });
//   //     } else {
//   //       setError("Failed to fetch results.");
//   //     }
//   //   } catch (err) {
//   //     setError("An error occurred while fetching data.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const querySearchTerm = params.get("searchTerm");

//     if (querySearchTerm) {
//       setSearchTerm(querySearchTerm);
//       // handleSearch();
//     }
//   }, []);

//   return (
//     <div>
//       <Header />
//       <div className="w-[50%] mx-auto relative mt-10">
//       <form onSubmit={searchSubmit} className="relative mt-10">
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={handleInputChange}
//         placeholder="Search for restaurants and food"
//         className="w-full px-4 py-2 border border-gray-300 rounded-sm"
//       />
//       <button
//         type="submit"
//         className="absolute right-0 top-0 h-full px-6 flex items-center justify-center"
//       >
//         <i className="fi fi-rs-search"></i>
//       </button>
//     </form>
//       </div>

//       {loading && <div className="text-center mt-4">Loading...</div>}

//       {error && <div className="text-center mt-4 text-red-500">{error}</div>}

//       <div className="mt-6">
//         <div>
//           {results.menuitem?.length > 0 ? (
//             <ul>
//               {results.menuitem.map((item, index) => (
//                 <li key={index} className="mb-4">
//                   <Link to={`/hotel-detail/${item.menuItemID}`}>
//                     <img
//                       className="rounded-2xl object-cover"
//                       src={item.imagedata}
//                       alt={item.name}
//                       style={{ width: "80px", height: "60px" }}
//                     />
//                     <div>{item.name} - {item.type}</div>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No menu items found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Layouts/Header";

export const PageSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState({ menuitem: [] });
  const [error, setError] = useState(null);

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    //it converts binary string into base64 image
    return window.btoa(binary);
  };

  const fetchMenuItems =  async () => {
    if(!searchTerm.trim()) return;

    setError(null);

    try {
      const response = await fetch(`http://localhost:3000/menuitem?type=${searchTerm}`);
      const data = await response.json();

      if (response.ok) {
        const Res_data = data.map((dt) => {
          try {
            const byteArray = new Uint8Array(dt.imagedata.data);
            const base64String = arrayBufferToBase64(byteArray);
            const base64Image = `data:image/webp;base64,${base64String}`;
            dt.imagedata = base64Image;
          } catch (error) {
            console.error("Error fetching product images:", error);
          }
          return dt;
        });

        setResults({ menuitem: Res_data });
      } else {
        // setError("Failed to fetch results.");
        setError("No menu items found for the specified type.");
      }
    } catch (err) {
      setError("An error occurred while fetching data.");
    } 
  };


  const searchSubmit = (e) => {
    e.preventDefault();
    fetchMenuItems();
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const querySearchTerm = params.get("searchTerm");

    if (querySearchTerm) {
      setSearchTerm(querySearchTerm);
      fetchMenuItems();
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="w-[50%] mx-auto relative mt-10">
        <form onSubmit={searchSubmit} className="relative mt-10">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search for restaurants and food"
            className="w-full px-4 py-2 border border-gray-300 rounded-sm"
          />
          <button
            type="submit"
            disabled={!searchTerm.trim()}
            className={`absolute right-0 top-0 h-full px-6 flex items-center justify-center ${!searchTerm.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <i className="fi fi-rs-search"></i>
          </button>
        </form>
      </div>

      {error && <div className="text-center mt-4 text-red-500">{error}</div>}

      <div className="mt-6 w-[50%] mx-auto">
        <div>
          {results.menuitem?.length > 0 ? (
            <ul>
              {results.menuitem.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={`/hotel-detail/${item.menuItemID}`}>
                    <div className="flex mt-12">
                      <div className="mr-10">
                        <img
                          className="rounded-2xl object-cover"
                          src={item.imagedata}
                          alt={item.name}
                          style={{ width: "100px", height: "80px" }}
                        />
                      </div>
                      <div className="mt-10">{item.name} - {item.type}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No menu items found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
