import { useContext } from 'react';
import Intro from "./components/intro/Intro";
import PortfolioList from "./components/portfolioList/PortfolioList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from './components/context';
import Footer from './components/footer/Footer'

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkMode ? '#222' : 'white', color: darkMode && 'white'}}>
      <Toggle />
      <Intro />
      <PortfolioList />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
