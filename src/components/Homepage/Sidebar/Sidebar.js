import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sidebarToggleActions } from "../../../store/reducers/sidebar-toggle-slice";
import classes from "./Sidebar.module.css";
import { AiOutlineMenuUnfold, AiOutlineLogin } from "react-icons/ai";

const Sidebar = () => {
  const toggle = useSelector((state) => state.sidebarToggle);
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(sidebarToggleActions.toggle());
  };

  return (
    <>
      <div className={classes[toggle ? "sidebar-active" : "sidebar"]}>
        <div className={classes.nav}>
          <AiOutlineLogin className={classes.menu} />
          <AiOutlineMenuUnfold
            className={classes.menu}
            onClick={toggleHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
