import './App.css';
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Crew from "./Crew";
import Destination from "./Destination";
import Attractions from "./Attractions";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Crew" element={<Crew />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Attractions" element={<Attractions />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
