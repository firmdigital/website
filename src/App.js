import Agence from "./components/Agence";
import Services from "./components/Services";
import TechStack from "./components/TechStack";

function App() {
  return (
   <div className="w-full pt-60 space-y-16">
    <Agence />
    <Services />
    <TechStack />
   </div>
  );
}

export default App;
