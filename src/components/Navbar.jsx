import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div  className="flex gap-5 my-3">
        <div className="text-xl">Navbar</div>
        <ul className="flex gap-3 text-sky-500 items-center">
          <li className="hover:text-yellow-400 transition-colors delay-75"><Link to="/">Home</Link></li>
          <li className="hover:text-yellow-400 transition-colors delay-75"><Link to="/about">About</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
