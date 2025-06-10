import { Home, WebDesign, AppDesign, GraphicDesign, About, Locations, Contact } from "./components/pages";
import { WebFooter, TopNavBar } from "./components/layout";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <TopNavBar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/webdesign" element={<WebDesign />} /> */}
        {/* <Route path="/appdesign" element={<AppDesign />} /> */}
        {/* <Route path="/graphicdesign" element={<GraphicDesign />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/locations" element={<Locations />} /> */}
        <Route path="/" element={<Contact />} />
      </Routes>
      <WebFooter />
    </>
  )
}

export default App
