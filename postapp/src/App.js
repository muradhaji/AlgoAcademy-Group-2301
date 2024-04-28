import './App.css';

import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import { useState } from 'react';

function App() {
  let [menuOpen, setMenuOpen] = useState(true);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className='App'>
      <Header toggle={toggleMenu}></Header>
      <main className='container'>
        <Aside open={menuOpen}></Aside>
        <div className='routeHolder' onClick={toggleMenu}>
          Home
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
