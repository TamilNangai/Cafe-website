import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import About_page from "./Pages/About_page";
import Coffee_page from "./Pages/Coffee_page";
import Contact_us from "./Pages/Contact_us";
import Home from "./Pages/Home";
import Tea_page from "./Pages/Tea_page";
import  Form  from "./Components/Form";
import Table_Page from "./Pages/Table_Page";

export default function App() {


    
  return (    
   <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About_page" element={<About_page />} />
          <Route path="/Coffee_page" element={<Coffee_page />} />
          <Route path="/Tea_page" element={<Tea_page />} />
          <Route path="/Contact_us" element={<Contact_us />} />
          <Route path="/Table_Page" element={<Table_Page />} />


  

    


        </Routes>
        <Footer />
      </BrowserRouter>
   </>
   )
 }

