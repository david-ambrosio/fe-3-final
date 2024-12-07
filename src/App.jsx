/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import ContextProvider from "./Components/utils/ContextProvider"; // Importar ContextProvider

function App() {
  return (
    <ContextProvider>
      {" "}
      {/* Envolver la aplicación con el ContextProvider */}
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
