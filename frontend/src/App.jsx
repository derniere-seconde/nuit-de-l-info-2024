import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./views/Home";
import Newsletter from "./views/Newsletter";
import Test from "./views/Test";
import Grid from "./components/Grid";

function App() {
  return (
    <main className="dark text-foreground bg-background">
      <Header />
      <Grid>
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </Grid>
    </main>
  );
}

export default App;
