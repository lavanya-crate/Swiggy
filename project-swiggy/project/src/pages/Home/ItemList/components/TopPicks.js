
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../../../../context/CartContext";

export const TopPicks = ({item}) => {
    const {addToCart, cartList} = useCart();
    const [items, setItems] = useState([]);
    const [value, setValue] = useState(0);

     
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

    // useEffect(() => {
    //     async function foodItems() {
    //         const response = await fetch("http://localhost:3000/images");
    //         const data = await response.json()
    //         setItems(data);
    //     }
    //     foodItems();
    // }, [])


    function handleNext() {
        setValue((prev) => prev + 80)
    }

    function handlePrev() {
        setValue((prev) => prev - 80)
    }

    return (
        <div className="w-[50%] mx-auto  overflow-hidden  ">
            <div className="flex  justify-between mt-3">
                <h1 className="text-2xl font-bold">Top Picks</h1>

                <div className="flex gap-3">
                    <div onClick={handlePrev} className={`bg-gray-200 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center`}>
                        <i className=" text-2xl bi bi-arrow-left-short"></i>
                    </div>
                    <div onClick={handleNext} className="bg-gray-200 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center">
                        <i className="text-2xl bi bi-arrow-right-short"></i>
                    </div>
                </div>
            </div>


            <div className=" flex gap-5 relative rounded-lg">
                {items.map((item) => (
                    <div style={{ translate: `-${value}%` }} className={` duration-1000`} key={item.id}>
                        <div className=" max-w-sm bg-white mt-5 dark:bg-gray-800 dark:border-gray-700" style={{ width: "285px" }}  >
                            <div className="">
                                <Link to="#">
                                    <img className="rounded-2xl object-cover" src={item.imagedata} alt="" style={{ width: "300px", height: "290px" }} />
                                    <span className="absolute left-10 bg-gradient-to-t from-black bottom-10 text-white font-bold"><i className="fi fi-sr-indian-rupee-sign text-xs"></i>{item.price}</span>
                                    <span className="absolute top-20 left-10 text-white bg-gradient-to-t from-black font-bold">{item.name}</span>
                                    {/* <button type="button" className="absolute right-10  bottom-5 text-green bg-white-500">ADD</button> */}
                                    <button type="button" onClick={() => addToCart(item)} class="absolute right-5 pl-8 pr-8  bottom-1 text-green-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">ADD</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <hr className="mt-10 mb-10"></hr>
        </div>
    )
}


