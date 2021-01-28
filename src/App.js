import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/globalStyles";
import theme from "./assets/styles/theme";

import Layout from "./components/Layout";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Layout>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
        <MobileMenu showMenu={showMenu} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
