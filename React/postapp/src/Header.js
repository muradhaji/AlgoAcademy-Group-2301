import { useContext } from 'react';
import MyContext from './context/MyContext';
import './Header.css';

function Header() {
  let data = useContext(MyContext);
  let { toggleMenu } = data;

  return (
    <header className='container'>
      <div className='logo'>Post App</div>
      <div className='toggleMenu' onClick={toggleMenu}>
        <i className='fa-solid fa-bars'></i>
      </div>
    </header>
  );
}

export default Header;
