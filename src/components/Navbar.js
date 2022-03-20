import { Link } from "react-router-dom";
import Group1 from "../assets/marcha-web.svg";

function Navbar() {
  return (
    <nav className="h-24 flex flex-cols justify-between px-20 items-center border-b-gray-100 border-b-2 bg-white">
      <div className="flex">
        <Link to="/">
          {" "}
          <img src={Group1} alt="" />
        </Link>
      </div>

      <div className="flex space-x-8 items-center">
        <Link to="/">Home</Link>
        <Link to="/">Contact</Link>
        <Link to="/">About Us</Link>
        <a href="" className="bg-purple-600 py-2 px-4 rounded text-white font-semibold">Our Youtube</a>
      </div>
    </nav>
  );
}

export default Navbar;
