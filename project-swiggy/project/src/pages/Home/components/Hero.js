import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    async function foodItems() {
      const response = await fetch("http://localhost:8080/items");
      const data = await response.json()
      setItems(data);
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
      <div style={{ translate: `-${value}%` }} className={`flex w-[169%] duration-1000`}>
        {items.map((item) => (
          <Link to="/individualitems">
            <div key={item.id}>
              <img src={item.image} alt="" />

            </div>
          </Link>
        ))}
      </div>
      <hr className="mt-10 mb-10 width-2px"></hr>
    </div>
  );


}


