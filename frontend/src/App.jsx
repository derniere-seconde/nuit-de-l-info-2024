import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./views/Home";
import Newsletter from "./views/Newsletter";
import Battle from "./views/PokeBattle";
import Grid from "./components/Grid";
import Test from "./views/Test";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <main className="dark font-mono text-foreground bg-background">
        <Header />
        <Grid>
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/battle/*" element={<Battle />} />
            <Route path="/test" element={<Test />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
        </Grid>
      </main>
    </NextUIProvider>
  );
}

export default App;
