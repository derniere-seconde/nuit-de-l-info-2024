import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./views/Home";
import Newsletter from "./views/Newsletter";

function App() {
  return (
    <main className="dark">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </main >
  );
}

export default App;
