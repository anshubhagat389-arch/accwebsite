import { BrowserRouter, Route, Routes } from "react-router-dom";
import Abouts from "./Component/Abouts/Abouts";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Gallery from "./Component/Gallery/Gallery";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import VGallery from "./Component/VGallery/VGallery";



function App() {
  return (
   <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<Abouts/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/vgallery" element={<VGallery/>} />
    </Routes>
    <Footer/>

     {/* <Home/>  */}
    {/* <Abouts/> */}
     {/* <Gallery/> */}
     {/* <VGallery/> */}
     {/* <Contact/> */}
     
   </div>
  );
};

export default App;
