import './App.css';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import Users from './Users';
import PostDetails from './PostDetails';
import MyContext from './context/MyContext';

function App() {
  let [menuOpen, setMenuOpen] = useState(true);
  let [posts, setPosts] = useState([]);
  let [postsLoading, setPostsLoading] = useState(false);
  let [post, setPost] = useState(null);
  let [postLoading, setPostLoading] = useState(false);
  let [user, setUser] = useState(null);
  let [userLoading, setUserLoading] = useState(false);
  let [comments, setComments] = useState([]);
  let [commentsLoading, setCommentsLoading] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <BrowserRouter>
      <MyContext.Provider
        value={{
          menuOpen,
          toggleMenu,
          posts,
          setPosts,
          postsLoading,
          setPostsLoading,
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
        }}
      >
        <div className='App'>
          <Header></Header>
          <main className='container'>
            <Aside></Aside>
            <div className='routeHolder'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/posts/:postId' element={<PostDetails />} />
                <Route path='/users' element={<Users />} />
                <Route path='*' element={<div>404, Page not found</div>} />
                {/* <Route path='/f' element={<FunctionComponent x={menuOpen} />} /> */}
                {/* <Route path='/c' element={<ClassComponent x={menuOpen} />} /> */}
              </Routes>
            </div>
          </main>
          <Footer></Footer>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
