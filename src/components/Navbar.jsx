import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>Navbar</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </>
  );
};

export default Navbar;
