import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about-us" element={<AboutUs/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
