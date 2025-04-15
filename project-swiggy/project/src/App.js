import { AllRoutes } from "./routes/AllRoutes";

import './App.css';

import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const[p,setP]=useState("");
  
  return (
    <div className="App">
      
      <div><AllRoutes  items={items} setItems={setItems} p={p} setP={setP}/></div>
    </div>
  );
}

export default App;


