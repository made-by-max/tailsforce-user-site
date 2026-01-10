import { NavLink } from "react-router";

const TopNav = () => {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
    </>
  );
};

export default TopNav;
