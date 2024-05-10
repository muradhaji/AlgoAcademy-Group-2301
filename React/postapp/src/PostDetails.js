import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetails() {
  let [post, setPost] = useState(null);
  let [postLoading, setPostLoading] = useState(false);
  let params = useParams();
  let { postId } = params;

  useEffect(() => {
    setPostLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        if (!isEmpty(data)) {
          setPost(data);
        }
        setPostLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setPostLoading(false);
      });
  }, []);

  return (
    <div className='postDetails'>
      {postLoading ? (
        'Post loading ...'
      ) : post ? (
        <div>
          <div>
            <b>User:</b>
          </div>
          <div>
            <div>
              <b>Title:</b> {post.title}
            </div>
            <div>
              <b>Body:</b> {post.body}
            </div>
          </div>
          <div>
            <b>Comments:</b>
          </div>
        </div>
      ) : (
        'Post not found :('
      )}
    </div>
  );
}

export default PostDetails;
