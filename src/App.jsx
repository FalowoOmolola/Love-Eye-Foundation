import { Routes, Route } from "react-router-dom";
import Donation from "./Pages/Donation";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Programs from "./Pages/Programs";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donate" element={<Donation />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}
