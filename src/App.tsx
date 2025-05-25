import { Home, WebDesign, AppDesign, GraphicDesign } from "./components/pages";
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
        <Route path="/" element={<GraphicDesign />} />
      </Routes>
      <WebFooter />
    </>
  )
}

export default App
