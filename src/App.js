import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/headers/headers'
import Footer from './components/footer/footer'
import { Container } from '@mantine/core';
import Home from './pages/Home/home'
import Movies from './pages/Movies/movies'
import Search from "./pages/Search/search";
import Series from "./pages/Series/series";
import Kids from "./pages/Kids/kids";


function App() {
  return (
    <>
    <BrowserRouter>
     <Header />
    <div className="App">
     <Container>
       <Routes>
         <Route path="/search" element={<Search />}/>
         <Route path="/" element={<Home />} exact/>
         <Route path="/Movies" element={<Movies />}/>
         <Route path="/Series" element={<Series />}/>
         <Route path="/Kids" element={<Kids />}/>
       </Routes>
     </Container>
     <Footer />
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
