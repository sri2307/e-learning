import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sidebarToggleActions } from "../../../store/reducers/sidebar-toggle-slice";
import classes from "./Navbar.module.css";
import { AiOutlineMenuUnfold, AiOutlineLogin } from "react-icons/ai";

const Navbar = () => {
  // const toggle = useSelector((state) => state.sidebarToggle);
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(sidebarToggleActions.toggle());
  };
  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <div className={classes.nav}>
          <AiOutlineMenuUnfold
            className={classes.menu}
            onClick={toggleHandler}
          />
        </div>
        <div className={classes.nav}>
          <h2>E-Learning</h2>
        </div>
        <div className={classes.nav}>
          <AiOutlineLogin className={classes.menu} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
