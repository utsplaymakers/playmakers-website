import { defaultTheme } from "../theme";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "../style.css";

export const GlobalStyles = createGlobalStyle`
  body, #root {
    background: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.text.primary};
    margin: 0 auto;
  }
`;

export const MyApp = ({ Component, pageProps }) => {
  const theme = defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default MyApp;
