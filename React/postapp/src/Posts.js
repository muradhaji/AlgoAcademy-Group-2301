import { useEffect, useState } from 'react';
import './Posts.css';
import { Link } from 'react-router-dom';

function Posts() {
  let [posts, setPosts] = useState([]);
  let [postsLoading, setPostsLoading] = useState(false);

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
