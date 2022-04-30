import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './components/Main';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './Footer';
import Landing from './components/Landing';
import Projects from './components/Projects';
import MyServices from './components/MyServices';
import CreatePost from './CreatePost';
import Login from './Login';
import Home from './Home';
import './app.css';
import Blog from './Blog';
import { useState } from 'react';


function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="app">
      <Router>
        <Navbar isAuth={isAuth} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
