// routes.js

//Decoupling route declarations from the main component
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
];

export default routes;
