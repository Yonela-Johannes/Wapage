import Main from './components/Main';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './Footer';
import Landing from './components/Landing';
import Projects from './components/Projects';
import MyServices from './components/MyServices';
import './app.css';

function Home() {
  return (
    <div className='home mainContainer'>
      <div className="landingHome">
        <Landing />
        <Main />
      </div>
      <Projects />
      <MyServices />
    </div>
  );
}

export default Home;
