import { Route, Routes } from "react-router-dom";
import "./output.css";
import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Experiences from "./pages/Experiences";
import Education from "./pages/Education";
import Others from "./pages/Others";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/education" element={<Education />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </>
  );
}

export default App;
