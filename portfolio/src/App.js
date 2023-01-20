import Header from "./components/header";
import Projects from "./components/projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        {
          <Routes>
            <Route path="/" element={<Projects />}></Route>
          </Routes>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
