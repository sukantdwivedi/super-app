import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Genre from './pages/Genre';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path='/genre' element={<Genre />} />
      </Routes>
    </>
  )
}

export default App