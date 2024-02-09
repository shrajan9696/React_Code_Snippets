import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/home.jsx";

function App() {
    return (
   <BrowserRouter>
       <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/about" element={<h2>About</h2>} />
       </Routes>
   </BrowserRouter>
  )
}

export default App
