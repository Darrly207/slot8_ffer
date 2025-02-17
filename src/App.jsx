import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./Routes";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
