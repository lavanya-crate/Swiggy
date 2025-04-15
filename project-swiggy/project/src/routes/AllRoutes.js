// import { Routes, Route } from "react-router-dom";
// import { HomePage, PageSearch, CartPage, HelpPage, OfferPage } from "../pages";
// import { ItemsDetail } from "../pages/Home/ItemList/ItemsDetail";
// import { Other } from "../components";
// import { SignUp } from "../components";
// import { Login } from "../components";
// import { IndividualItem } from "../pages/Home/ItemList/components/IndividualItem";
// import { HotelDetail } from "../pages/Home/ItemList/components/HotelDetail";


// export const AllRoutes = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
     
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/other" element={<Other />} />
//         <Route path="/help" element={<HelpPage />} />
//         <Route path="/offer" element={<OfferPage />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/login" element={<Login />} />
//         {/* <Route path="/itemdetails" element={<ItemsDetail />} /> */}
//         <Route path="/individualitems" element={<IndividualItem />} />
//         <Route path="/hotel-detail/:id" element={<HotelDetail />} />
//         <Route path="/search" element={<PageSearch />} />
//       </Routes>
//     </>
//   )
// }


import { Routes, Route } from "react-router-dom";
import { HomePage, PageSearch, CartPage, HelpPage, OfferPage } from "../pages";
import { ItemsDetail } from "../pages/Home/ItemList/ItemsDetail";
import { Other } from "../components";
import { SignUp } from "../components";
import { Login } from "../components";
import { IndividualItem } from "../pages/Home/ItemList/components/IndividualItem";
import { HotelDetail } from "../pages/Home/ItemList/components/HotelDetail";

export const AllRoutes = ({items, setItems,p,setP}) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage  items={items} setItems={setItems}/>} />
      <Route path="/cart" element={<CartPage items={items} setItems={setItems}  p={p} setP={setP}/>} />
      <Route path="/other" element={<Other />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/offer" element={<OfferPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/individualitems" element={<IndividualItem />} />
      <Route path="/hotel-detail/:id" element={<HotelDetail p={p} setP={setP} items={items} setItems={setItems}/>} />
      {/* Route for Search Page */}
      <Route path="/search" element={<PageSearch />} />
    </Routes>
  );
};
