import './app.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './Footer';
import Landing from './components/Landing';
function App() {
  return (
    <div className="app">
      <div className='mainContainer'>
        <Navbar />
        <Landing />
        <Main />
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
