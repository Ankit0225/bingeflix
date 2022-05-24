import React, { useState } from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/headers/headers'
import Footer from './components/footer/footer'
import { Container } from '@mantine/core';
import Home from './pages/Home/home'
import Movies from './pages/Movies/movies'
import Search from "./pages/Search/search";
import Series from "./pages/Series/series";
import Profile from "./pages/Profile/profile";


function App() {

  const [search, setSearch] = useState("");
  return (
    <>
    <BrowserRouter>
     <Header search={search} setSearch={setSearch}/>
    <div className="App">
     <Container>
       <Routes>
       {/* components={() => (<Comments myProp="value" />)} */}
         <Route search={search} setSearch={setSearch} path="/search" element={<Search search={search} setSearch={setSearch}/>}/>
         <Route path="/" element={<Home />} exact/>
         <Route path="/Movies" element={<Movies />}/>
         <Route path="/Series" element={<Series />}/>
         <Route path="/Profile" element={<Profile />}/>
       </Routes>
     </Container>
     <Footer />
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
