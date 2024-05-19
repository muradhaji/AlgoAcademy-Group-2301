import { Link } from 'react-router-dom';
import MyContext from './context/MyContext';
import './Aside.css';

function Aside() {
  return (
    <MyContext.Consumer>
      {(data) => (
        <aside className={data.menuOpen ? '' : 'hidden'}>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/posts'>
              Posts {data.posts.length > 0 ? data.posts.length : ''}
            </Link>
            <Link to='/users'>Users</Link>
          </nav>
        </aside>
      )}
    </MyContext.Consumer>
  );
}

export default Aside;
