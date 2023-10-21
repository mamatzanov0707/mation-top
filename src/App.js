import './App.scss';
import UserNew from "./Components/UserNew/UserNew";
import {Route, Routes} from "react-router-dom";
import Test from "./Components/Header/test";


function App() {
  return (
   <div className='App'>
       <Routes>
           <Route path="/" element={<Test/>}/>
           <Route path='/user' element={<UserNew/>}/>
       </Routes>
   </div>
  );
}

export default App;
