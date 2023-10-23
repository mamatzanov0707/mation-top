import './App.scss';
import UserNew from "./Components/UserNew/UserNew";
import {Route, Routes} from "react-router-dom";
import Test from "./Components/Header/test";
import {useState} from "react";


function App() {
    const [product , setProduct] = useState([])
  return (
   <div className='App'>
       <Routes>
           <Route path="/" element={<Test product={product} setProduct={setProduct}/>}/>
           <Route path='/user' element={<UserNew/>}/>
       </Routes>
   </div>
  );
}

export default App;
