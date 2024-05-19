import { isEmpty } from 'lodash';
import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MyContext from './context/MyContext';
import './PostDetails.css';

function PostDetails() {
  let data = useContext(MyContext);
  let {
    post,
    setPost,
    postLoading,
    setPostLoading,
    user,
    setUser,
    userLoading,
    setUserLoading,
    comments,
    setComments,
    commentsLoading,
    setCommentsLoading,
  } = data;

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

  useEffect(() => {
    if (post) {
      setUserLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`, {
        method: 'GET',
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (!isEmpty(data)) {
            setUser(data);
          }
          setUserLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setUserLoading(false);
        });
    }
  }, [post]);

  useEffect(() => {
    if (post) {
      setCommentsLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/comments`, {
        method: 'GET',
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let newArr = [];
          for (let i = 0; i < data.length; i++) {
            if (data[i].postId === post.id) {
              newArr.push(data[i]);
            }
          }
          setComments(newArr);
          setCommentsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setCommentsLoading(false);
        });
    }
  }, [post]);

  return (
    <div className='postDetails'>
      {postLoading ? (
        'Post loading ...'
      ) : post ? (
        <div>
          <div>
            {userLoading ? (
              'User loading ...'
            ) : user ? (
              <>
                <b>User:</b> <Link to={`/users/${user.id}`}>{user.name}</Link>
              </>
            ) : (
              'User not found.'
            )}
          </div>
          <div>
            <div>
              <b>Title:</b> {post.title}
            </div>
            <div>
              <b>Body:</b> {post.body}
            </div>
          </div>
          <div className='commentsHolder'>
            <div>
              <b>Comments:</b>
            </div>
            {commentsLoading
              ? 'Comments loading ...'
              : comments.length
              ? comments.map((comment) => (
                  <div className='comment'>
                    <div>
                      <b>{comment.email}</b>
                    </div>
                    <div>{comment.body}</div>
                  </div>
                ))
              : 'There is not any comments.'}
          </div>
        </div>
      ) : (
        'Post not found :('
      )}
    </div>
  );
}

export default PostDetails;
