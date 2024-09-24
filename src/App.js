// package imports
import { Routes, Route } from "react-router-dom";

// file imports
// components
// routes
import About from "./components/routes/About";
import Contact from "./components/routes/Contact";
import Home from "./components/routes/Home";
import Portfolio from "./components/routes/Portfolio";
import Skills from "./components/routes/Skills";
// layout
import Header from "./components/layout/Header";
// styles
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
