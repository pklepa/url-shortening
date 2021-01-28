import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/globalStyles";
import theme from "./assets/styles/theme";

import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Layout>
        <Navbar />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
