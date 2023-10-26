import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { PostList } from './pages/posts/PostList';
import { Post } from './pages/post/Post';

import styles from './App.module.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className={styles.mainContainer}>
        <Header />
        <Routes>
          <Route exact path={"/posts"} element={<PostList/>} />
          <Route path='/post/:id' element={<Post />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
