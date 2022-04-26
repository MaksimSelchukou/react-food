import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { About } from "./pages/About"
import { NotFound } from "./pages/NotFound"
import { Movies } from "./pages/Movies"



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="container content">
          1213
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/movies/:title" element={<Movies />} />
          </Routes>

        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
