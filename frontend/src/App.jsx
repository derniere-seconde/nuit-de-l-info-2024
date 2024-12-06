import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import Newsletter from "./views/Newsletter";
import PokeBattle from "./views/PokeBattle";
import Grid from "./components/Grid";
import PokeQuiz from "./views/PokeQuiz";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <main className="dark font-mono text-foreground bg-background">
        <Header />
        <Grid>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/battle/:pokemon" element={<PokeBattle />} />
            <Route path="/poke-quiz" element={<PokeQuiz />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
        </Grid>
      </main>
    </NextUIProvider>
  );
}

export default App;
