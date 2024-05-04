import { useEffect, useState } from 'react';

function Posts() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='postsFlex'>
      {posts.length
        ? posts.map((post) => {
            return (
              <>
                <div>
                  <b>Title:</b> {post.title} <br />
                  <b>Body: </b> {post.body}
                </div>
                <br />
              </>
            );
          })
        : 'There is not any posts'}
    </div>
  );
}

export default Posts;
