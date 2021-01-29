import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/globalStyles";
import theme from "./assets/styles/theme";

import Layout, { ColorBackground } from "./components/Layout";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import HeroSection from "./components/HeroSection";
import SearchSection from "./components/SearchSection";
import DetailsSection from "./components/DetailsSection";
import CallToActionSection from "./components/CallToActionSection";
import Footer from "./components/Footer";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Layout>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
        <MobileMenu showMenu={showMenu} />

        <HeroSection />

        <ColorBackground>
          <SearchSection />

          <DetailsSection />
        </ColorBackground>

        <CallToActionSection />

        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
