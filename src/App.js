import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";
import About from "./pages/about/About";
import Show from "./pages/show/Show";
import Video from "./pages/video/Video";
import FAQ from "./pages/faq/FAQ";
import Pricing from "./pages/pricing/Pricing";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/show" element={<Show />} />
      <Route path="/video" element={<Video />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
