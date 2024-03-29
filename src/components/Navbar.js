import { Link } from "react-router-dom";
import Group1 from "../assets/marcha-web.svg";

function Navbar() {
  return (
    <nav className="h-24 sticky top-0 z-50 flex flex-cols justify-between px-20 items-center border-b-gray-100 border-b-2 bg-white">
      <div className="flex">
        <Link to="/">
          {" "}
          <img src={Group1} alt="" />
        </Link>
      </div>

      <div className="flex space-x-8 items-center">
        <Link to="/" className="font-medium hover:border-b-2 hover:border-black">Home</Link>
        <Link to="/contact" className="font-medium hover:border-b-2 hover:border-black">Contact</Link>
        <Link to="/about-us" className="font-medium hover:border-b-2 hover:border-black">About Us</Link>
        <a href="https://drive.google.com/drive/folders/1e259GheZt2TWYYZxpuW9oZ-vfTYwBiEe?usp=sharing" rel="noreferrer" target="_blank" className="bg-purple-600 py-2 px-4 rounded text-white font-semibold hover:bg-purple-700">Download App</a>
      </div>
    </nav>
  );
}

export default Navbar;
