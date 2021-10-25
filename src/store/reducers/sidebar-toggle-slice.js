import { createSlice } from "@reduxjs/toolkit";

const sidebarToggleSlice = createSlice({
  name: "sidebarToggle",
  initialState: false,
  reducers: {
    toggle(state) {
      return (state = !state);
    },
  },
});

export const sidebarToggleActions = sidebarToggleSlice.actions;
export default sidebarToggleSlice;
