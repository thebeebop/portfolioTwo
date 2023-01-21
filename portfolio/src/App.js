import Header from "./components/header";
import Projects from "./components/projects";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        {
          <Routes>
            <Route path="/" element={<Projects />}></Route>
            <Route path="about" element={<About />}></Route>
          </Routes>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
