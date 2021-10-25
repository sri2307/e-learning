import React from "react";
import classes from "./Navbar.module.css";
import { AiOutlineMenuUnfold, AiOutlineLogin } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <navbar className={classes.navbar}>
        <div className={classes.nav}>
          <AiOutlineMenuUnfold className={classes.menu} />
        </div>
        <div className={classes.nav}>
          <h2>E-Learning</h2>
        </div>
        <div className={classes.nav}>
          <AiOutlineLogin className={classes.menu} />
        </div>
      </navbar>
    </header>
  );
};

export default Navbar;
