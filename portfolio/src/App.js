import Header from "./components/header";
import Projects from "./components/projects";
import About from "./components/About";
import Contact from "./components/Contact";
import WeatherWidget from "./components/projects/WeatherWidget";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Projects />}></Route>
        <Route
          path="/projects/weather-widget"
          element={<WeatherWidget />}
        ></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
