import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { sidebarToggleActions } from "../../../store/reducers/sidebar-toggle-slice";
import classes from "./Sidebar.module.css";
import { AiOutlineMenuUnfold, AiOutlineLogin } from "react-icons/ai";
import { navItems } from "../../../utils/NavMenu";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // const toggle = useSelector((state) => state.sidebarToggle);
  // const dispatch = useDispatch();
  // const toggleHandler = () => {
  //   dispatch(sidebarToggleActions.toggle());
  // };

  return (
    <>
      <div className={classes.sidebar}>
        <div className={classes.sidebar__nav}>
          {navItems.map((item) => (
            <Link to={item.link}>
              <div className={classes.sidebar__nav__item}>
                <img src={item.icon} className={classes.menu} alt={item.name} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
