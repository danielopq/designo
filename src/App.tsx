import { Home, WebDesign } from "./components/pages";
import { WebFooter, TopNavBar } from "./components/layout";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<WebDesign />} />
      </Routes>
      <WebFooter />
    </>
  )
}

export default App
