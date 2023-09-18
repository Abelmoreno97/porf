import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/home.jsx";
import Proyects from "./views/Proyects";
import Labs from "./views/Labs";
import Cert from "./views/Cert";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/cert" element={<Cert />} />
      </Routes>
    </div>
  );
}

export default App;
