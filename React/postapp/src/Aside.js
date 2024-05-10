import './Aside.css';
import { Link } from 'react-router-dom';

function Aside(props) {
  let { open } = props;
  return (
    <aside className={open ? '' : 'hidden'}>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/users'>Users</Link>
        {/* <Link to='/f'>Function</Link> */}
        {/* <Link to='/c'>Class</Link> */}
      </nav>
    </aside>
  );
}

export default Aside;
