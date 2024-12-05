import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./views/Home";
import Newsletter from "./views/Newsletter";
import Sea from "./views/Sea";
import Grid from "./components/Grid";
import Test from "./views/Test";

function App() {
  return (
    <main className="dark text-foreground bg-background">
      <Header />
      <Grid>
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sea" element={<Sea />} />
          <Route path="/test" element={<Test />} />

          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </Grid>
    </main>
  );
}

export default App;
