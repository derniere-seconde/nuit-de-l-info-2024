import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./views/Home";
import Newsletter from "./views/Newsletter";
import HumanBody from "./views/HumanBody";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/human_body" element={<HumanBody />} />
      </Routes>
    </>
  );
}

export default App;
