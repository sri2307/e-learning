import { configureStore } from "@reduxjs/toolkit";
import sidebarToggleSlice from "./reducers/sidebar-toggle-slice";

const store = configureStore({
  reducer: {
    sidebarToggle: sidebarToggleSlice.reducer,
  },
});

export default store;
