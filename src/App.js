import Login from "./Login";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import './style.css';


function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
