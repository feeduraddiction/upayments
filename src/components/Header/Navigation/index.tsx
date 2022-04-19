import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="list-none flex justify-between items-center italic md:text-xl font bold px-4 h-14">
        <li><NavLink to="/">UPayments Store</NavLink> </li>
        <li>Register</li>
      </ul>
    </nav>
  );
};

export default Navigation;
