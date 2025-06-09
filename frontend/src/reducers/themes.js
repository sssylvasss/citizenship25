import { createSlice } from "@reduxjs/toolkit";

import { grayTheme } from "../styledcomponents/StyledTheme";

export const themes = createSlice({
  name: "themes",
  initialState: { theme: grayTheme },
  reducers: {
    changeTheme: (state, action) => {
        state.theme = action.payload;
      },
  }
});