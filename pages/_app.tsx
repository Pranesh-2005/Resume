import type { AppProps } from "next/app";
import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../design-system/globalStyle";
import "../design-system/index.css";
import { useSystemDesign } from "../design-system/useSystemDesign";

const WrappedApp: FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  const { darkTheme, lightTheme } = useSystemDesign();

  // Your resume site does not use UI theme switching,
  // so we apply light theme always:
  const activeTheme = lightTheme;

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default WrappedApp;
