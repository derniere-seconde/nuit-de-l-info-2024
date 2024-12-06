import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./views/Home";
import Newsletter from "./views/Newsletter";
import Game from "./views/Game";
import Battle from "./views/PokeBattle";
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
          <Route path="/battle/*" element={<Battle />} />
          <Route path="/test" element={<Test />} />
          <Route path="/game" element={<Game />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </Grid>
    </main>
  );
}

export default App;
