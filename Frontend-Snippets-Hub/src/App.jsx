import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/home.jsx";
import PasswordMain from "./sections/password/password-main.jsx";
import ProgressMain from "./sections/progress-bar/progress-main.jsx";

function App() {
    return (
   <BrowserRouter>
       <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/password" element={<PasswordMain/>} />
           <Route path="/progress" element={<ProgressMain/>} />
       </Routes>
   </BrowserRouter>
  )
}

export default App
