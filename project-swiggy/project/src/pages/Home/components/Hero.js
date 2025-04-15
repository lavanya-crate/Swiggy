import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
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
        // const response = await fetch("http://localhost:5000/menuitem");
        const response = await fetch("http://localhost:3000/heroimage");
        const data = await response.json()
        // console.log(data,"data at top rest");
        let Res_data=data.map((dt)=>{
          // console.log(dt.image_data.data,"image buffer data");
            try{
                const byteArray = new Uint8Array(dt.image_data.data);

                const base64String = arrayBufferToBase64(byteArray);

                const base64Image = `data:image/webp;base64,${base64String}`;
                // console.log(base64Image,"base64image ");

                dt.image_data=base64Image
            }catch (error) {
                console.error('Error fetching products Images:', error);
              }

              return dt;
        });
        // console.log(Res_data,"Res_Data ")
        setItems(Res_data);
        // console.log(Res_data,"Res_Data as items")
    }
    foodItems();
}, [])

  function handleNext() {
    setValue((prev) => prev + 18)
  }

  function handlePrev() {
    setValue((prev) => prev - 18)
  }



  return (
    <div className="w-[80%] mx-auto mt-3 overflow-hidden">
      <div className="flex  justify-between mt-3">
        <h1 className="text-2xl font-bold">What's in your mind?</h1>

        <div className="flex gap-3">
          <div onClick={handlePrev} className={`bg-gray-200 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center`}>
            <i class=" text-2xl bi bi-arrow-left-short"></i>
          </div>
          <div onClick={handleNext} className="bg-gray-200 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center">
            <i class="text-2xl bi bi-arrow-right-short"></i>
          </div>
        </div>
      </div>
      <div style={{ translate: `-${value}%` }} className={`flex w-[150%] duration-1000`}>
        {items.map((item) => (
          <Link to="/individualitems">
            <div key={item.id}>
              <img src={item.image_data} alt="" />

            </div>
          </Link>
        ))}
      </div>
      <hr className="mt-10 mb-10 width-2px"></hr>
    </div>
  );


}


