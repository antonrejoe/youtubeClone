import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';
import React from 'react';
function App() {
  return (
   
    <BrowserRouter> 
    
    <Navbar/>
    
    <Routes>
      <Route path='/' exact element={<Feed/>}/>
      <Route path='/Video/:id' exact element={<VideoDetail/>}/>
      <Route path='/Channel/:id' exact element={<ChannelDetail/>}/>
      <Route path='/SearchFeed/:id' exact element={<SearchFeed/>}/>

    </Routes>
    </BrowserRouter>


  );
}

export default App;
