import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/home.jsx";
import PasswordMain from "./sections/password/password-main.jsx";
import ProgressMain from "./sections/progress-bar/progress-main.jsx";
import PaginationMain from "./sections/pagination/pagination-main.jsx";
import TabsMain from "./sections/tabs/tabs-main.jsx";
import AccordionMain from "./sections/Accordion/accordion-main.jsx";
import RatingMain from "./sections/StarRating/rating-main.jsx";
import OTPMain from "./sections/OTP/otp-main.jsx";
import TreeMain from "./sections/TreeFolder/tree-main.jsx";
import ProductFilterMain from "./sections/ProductFilter/product-filter-main.jsx";
import AnimatedCursor from "react-animated-cursor"

function App() {
    return (
        <>
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: "#333"
                }}
                outerStyle={{
                    border: '3px solid #333'
                }}
            />
   <BrowserRouter>
       <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/password" element={<PasswordMain/>} />
           <Route path="/progress" element={<ProgressMain/>} />
           <Route path="/pagination" element={<PaginationMain/>} />
           <Route path="/tab" element={<TabsMain/>}/>
           <Route path="/accordion" element={<AccordionMain/>}/>
           <Route path="/rating" element={<RatingMain/>}/>
           <Route path="/otp" element={<OTPMain/>}/>
           <Route path="/tree" element={<TreeMain/>}/>
           <Route path = "/productfilter" element = {<ProductFilterMain/>}/>
       </Routes>
   </BrowserRouter>
        </>
  )
}

export default App
