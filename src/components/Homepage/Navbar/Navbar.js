import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sidebarToggleActions } from "../../../store/reducers/sidebar-toggle-slice";
import classes from "./Navbar.module.css";
import styles from "../../Landingpage/LandingPage.module.css";
import {
  AiOutlineLogin,
  AiOutlineSearch,
  AiFillCalendar,
  AiFillHome,
  AiFillBell,
} from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";
import logo from "../../../assets/images/logo.png";
import profile from "../../../assets/images/icons/profile.png";

const Navbar = () => {
  // const toggle = useSelector((state) => state.sidebarToggle);
  // const dispatch = useDispatch();
  // const toggleHandler = () => {
  //   dispatch(sidebarToggleActions.toggle());
  // };
  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <div className={classes.nav}>
          <img src={logo} alt='COnference Series' />
        </div>
        <div className={styles.search}>
          <input type='text' placeholder='Search' />
          <AiOutlineSearch className={styles["search-icon"]} />
        </div>
        <div className={classes.navMenu}>
          <div className={classes.nav}>
            <AiFillCalendar className={classes.menu} />
          </div>
          <div className={classes.nav}>
            <AiFillHome className={classes.menu} />
          </div>
          <div className={classes.nav}>
            <AiFillBell className={classes.menu} />
          </div>

          <div className={classes.nav}>
            Eng
            <MdOutlineArrowDropDown className={classes.menu} />
          </div>
          <div className={classes.nav}>
            <img
              src={profile}
              className={classes.profile}
              alt='COnference Series'
            />
            Madhav
            <MdOutlineArrowDropDown className={classes.menu} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
