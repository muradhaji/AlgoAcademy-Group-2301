import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyContext from './context/MyContext';
import './Posts.css';

function Posts() {
  let data = useContext(MyContext);
  let { posts, setPosts, postsLoading, setPostsLoading } = data;

  useEffect(() => {
    setPostsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setPostsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setPostsLoading(false);
      });
  }, []);

  return (
    <div className='postsFlex'>
      {postsLoading
        ? 'Posts loading ...'
        : posts.length
        ? posts.map((post) => {
            return (
              <>
                <Link to={`/posts/${post.id}`} className='post'>
                  <b>Title:</b> {post.title} <br />
                </Link>
                <br />
              </>
            );
          })
        : 'There is not any posts'}
    </div>
  );
}

export default Posts;
