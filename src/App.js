import { useEffect } from "react";
import Agence from "./components/Agence";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import ReactGA from 'react-ga4';
ReactGA.initialize('G-9L1YRG75J3');

function App() {

  const handleButtonClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Clicked a button'
    });
  };

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });

    handleButtonClick()
  }, []);


  return (
    <div className="w-full pt-10 space-y-20">
      <Agence />
      <Services />
      <TechStack />
    </div>
  );
}

export default App;
