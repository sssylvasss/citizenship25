import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

export const Theme = ({ children }) => {
  const theme = useSelector((state) => state.themes.theme);
    return (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
};