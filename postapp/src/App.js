import './App.css';

import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import Users from './Users';
import FunctionComponent from './FC';
import ClassComponent from './CC';

function App() {
  let [menuOpen, setMenuOpen] = useState(true);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <BrowserRouter>
      <div className='App'>
        <Header toggle={toggleMenu}></Header>
        <main className='container'>
          <Aside open={menuOpen}></Aside>
          <div className='routeHolder'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/posts' element={<Posts />} />
              <Route path='*' element={<div>404, Page not found</div>} />
              <Route path='/users' element={<Users />} />
              <Route path='/f' element={<FunctionComponent x={menuOpen} />} />
              <Route path='/c' element={<ClassComponent x={menuOpen} />} />
            </Routes>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
