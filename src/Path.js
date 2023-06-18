import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom';

import Homepage from './Homepage';
import Authentication from './authentication/Authentication';
import Login from './authentication/Login';
import Search from './Search';
import Explore from './explore';
import Signup from './authentication/Signup';

function Path() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Authentication/>}></Route>
      <Route path='/homepage' element={<Homepage/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
      <Route path='/explorer' element={<Explore/>}/>
      <Route path='/singup' element={<Signup/>}/>
      
      
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Path
