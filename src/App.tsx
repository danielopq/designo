import { Home, WebDesign, AppDesign, GraphicDesign, About, Locations, Contact } from "./components/pages";
import { WebFooter, TopNavBar } from "./components/layout";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webdesign" element={<WebDesign />} />
        <Route path="/appdesign" element={<AppDesign />} />
        <Route path="/graphicdesign" element={<GraphicDesign />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WebFooter />
    </>
  )
}

export default App
