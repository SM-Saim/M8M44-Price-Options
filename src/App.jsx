import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

// import DaisyNav from "./components/DaisyNav/DaisyNav";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-4xl bg-orange-400">Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
