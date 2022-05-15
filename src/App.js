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
import React, { useState, useEffect } from 'react'

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [scrollNav, setScrollNav] = useState(false)

  const switchNav = () => {
    window.scrollY > 10 && setScrollNav(false)
  }

  window.addEventListener('scroll', switchNav)

  return (
    <div className="app">
      <Router>
        <div className={'staticNavbar'}>
          <Navbar isAuth={isAuth} />
        </div>
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
