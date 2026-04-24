import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Advantages from "./components/Advantages";
import Workflows from "./components/Workflows";
import Precision from "./components/Precision";
import Dashboard from "./components/Dashboard";
import Builder from "./components/Builder";
import Ecosystem from "./components/Ecosystem";
import Footer from "./components/Footer";

const Home = () => (
  <div className="bg-[#1d1d1d] min-h-screen">
    <Header />
    <Hero />
    <About />
    <Advantages />
    <Workflows />
    <Precision />
    <Dashboard />
    <Builder />
    <Ecosystem />
    <Footer />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
