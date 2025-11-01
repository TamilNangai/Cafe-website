import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import About_page from "./Pages/About_page";
import Coffee_page from "./Pages/Coffee_page";
import Contact_us from "./Pages/Contact_us";
import Home from "./Pages/Home";
import Tea_page from "./Pages/Tea_page";
import Loginpage from "./Components/loginpage";
import Table from "./Pages/Table";

function AppContent() {
  const location = useLocation();
  const hideFooterT = location.pathname === "/Table" ;
  const hideFooterL = location.pathname === "/Loginpage" ;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About_page" element={<About_page />} />
        <Route path="/Coffee_page" element={<Coffee_page />} />
        <Route path="/Tea_page" element={<Tea_page />} />
        <Route path="/Contact_us" element={<Contact_us />} />
        <Route path="/Loginpage" element={<Loginpage />} />
        <Route path="/Table" element={<Table />} />
      </Routes>
      {!hideFooterT && !hideFooterL && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
