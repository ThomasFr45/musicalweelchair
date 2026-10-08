import './App.css';
import Home from './components/home/Home.jsx';
import Navbar from './components/Navbar';
import { HashRouter, Routes, Route } from "react-router-dom";
import Wiki from './components/wiki/Wiki';
import MyContext from "./context/MyContext";
import { useState } from 'react';
import Shop from './components/shop/Shop';
import Cart from './components/shop/Cart';
import Tk from './components/wiki/tk/Tk';
import Guild from './components/guild/Guild.jsx';
import TestShit from './components/wiki/testShit/TestShit.jsx';
import AwaClass from './components/wiki/awaClass/AwaClass.jsx';
import AwaClassDetails from './components/wiki/awaClass/AwaClassDetails.jsx';
import CelestialCorridor from './components/wiki/celestialCorridor/CelestialCorridor.jsx';
import Aquarius from './components/wiki/celestialCorridor/Aquarius.jsx';
import Aries from './components/wiki/celestialCorridor/Aries.jsx';
import Gemini from './components/wiki/celestialCorridor/Gemini.jsx';
import Leo from './components/wiki/celestialCorridor/Leo.jsx';
import Libra from './components/wiki/celestialCorridor/Libra.jsx';
import Sagittarius from './components/wiki/celestialCorridor/Sagittarius.jsx';

const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language'));

  return (
    <>
    <MyContext.Provider
        value={{
          language: language,
        }}
      >
          <HashRouter >
        <Navbar setLanguage={setLanguage}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guild" element={<Guild />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/cart" element={<Cart />} />
          <Route path="/wiki/tk" element={<Tk />} />
          <Route path="/wiki/awaclass" element={<AwaClass />} />
          <Route path="/wiki/awaclass/:class" element={<AwaClassDetails />} />
          <Route path="/wiki/test" element={<TestShit />} />
          <Route path="/wiki/celestialCorridor" element={<CelestialCorridor />} />
          <Route path="/wiki/celestialCorridor/aquarius" element={<Aquarius />} />
          <Route path="/wiki/celestialCorridor/aries" element={<Aries />} />
          <Route path="/wiki/celestialCorridor/gemini" element={<Gemini />} />
          <Route path="/wiki/celestialCorridor/leo" element={<Leo />} />
          <Route path="/wiki/celestialCorridor/libra" element={<Libra />} />
          <Route path="/wiki/celestialCorridor/sagittarius" element={<Sagittarius />} />
        </Routes>
      </HashRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;