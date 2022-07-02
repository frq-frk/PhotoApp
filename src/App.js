import Photo from "./components/Photo/Photo";
import About from "./components/About";
import Contact from "./components/Contact";
import View from "./components/View";
import Page404 from "./components/Page404";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavbarComponent";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Photo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}
