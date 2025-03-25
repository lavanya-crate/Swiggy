import { Link } from "react-router-dom";
import { Header } from "../../../../components";
import { useState, useEffect } from "react";

export const IndividualItem = () => {
    const [items, setItems] = useState([]);
    
    
        // useEffect(() => {
        //     async function foodItems() {
        //         const response = await fetch("http://localhost:8080/onlinedelivey");
        //         const data = await response.json()
        //         setItems(data);
        //     }
        //     foodItems();
        // }, [])

        const arrayBufferToBase64 = (buffer) => {
            let binary = '';
            const bytes = new Uint8Array(buffer);
            const len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
              binary += String.fromCharCode(bytes[i]);
            }
            return window.btoa(binary);
          };
     
        useEffect(() => {
            async function foodItems() {
                // const response = await fetch("http://localhost:5000/menuitem");
                const response = await fetch("http://localhost:3000/image");
                const data = await response.json()
                console.log(data,"data at top rest");
                let Res_data=data.map((dt)=>{console.log(dt.imagedata.data,"image buffer data");
                    try{
                        const byteArray = new Uint8Array(dt.imagedata.data);
     
                        const base64String = arrayBufferToBase64(byteArray);
     
                        const base64Image = `data:image/webp;base64,${base64String}`;
                        console.log(base64Image,"base64image ");
     
                        dt.imagedata=base64Image
                    }catch (error) {
                        console.error('Error fetching products Images:', error);
                      }
     
                      return dt;
                });
                // console.log(Res_data,"Res_Data ")
                setItems(Res_data);
                console.log(Res_data,"Res_Data as items")
            }
            foodItems();
        }, [])
     
    
    return (
        <>
            <Header />
            <div className="w-[82%] mx-auto">
                <div className="text-start mt-10">
                    <h1 className="text-4xl font-bold pb-3">Biryani</h1>
                    <span className="text-md font-bold text-gray-600">Taste these delectable classics, delectable biryanis to make your day.</span>
                </div>
                <div className="mt-3 text-start">
                    <button type="button" className="py-2 px-4 mb-2 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200">Filter <span><i class="fi fi-rr-settings-sliders ml-2"></i></span></button>
                    <button type="button" className="py-2 px-4 mb-2 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200">Sort By <span><i class="fi fi-rr-angle-small-down ml-2"></i></span></button>
                </div>
                <div>
                <h1 className="text-2xl text-start font-bold">Restaurants to explore</h1>

                <div className="grid grid-rows-3 grid-flow-col flex rounded-lg">
                                    {items.map((item) => (
                                        <div key={item.id}>
                                            <div className="hover:scale-95  duration-300 max-w-sm bg-white mt-5 dark:bg-gray-800 dark:border-gray-700" style={{ width: "265px" }}  >
                                            <Link to={`/hotel-detail/${item.id}`}>
                                                    <img className="rounded-2xl object-cover" src={item.imagedata} alt="" style={{ width: "300px", height: "200px" }} />
                                                </Link>
                                                <div className="mt-3 text-start">
                                                    <Link to="#">
                                                        <h5 className="mb-2 text-lg leading-3 font-bold text-gray-900 dark:text-white">{item.name}</h5>
                                                        <div className="flex gap-1">
                                                            <i className="fi fi-sr-circle-star text-green-600"></i>
                                                            <span>{item.rating}</span>
                                                            <span>.</span>
                                                            <span>{item.time}</span>
                                                        </div>
                                                        <div className="flex flex-col text-gray-800">
                                                            <span>{item.type}</span>
                                                            <span>{item.place}</span>
                                                        </div>
                                                    </Link>
                
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                
                                </div>
                </div>
            </div>
        </>
    )
}
