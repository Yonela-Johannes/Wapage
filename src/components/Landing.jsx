import './landing.css'
  import landingImage from '../img/landing.jpg'
  import landingImageThree from '../img/landingThree.jpg'
import displayImage from '../img/yonelajohannes.png'
import About from './About';
import { Link } from 'react-router-dom'
import { FaGithubAlt } from "react-icons/fa";
import { MdEmail, MdAddCall} from "react-icons/md";
import MyServices from './MyServices';
import { RiWhatsappFill} from "react-icons/ri";

function Landing() {
  return (
    <div className='landingMainContainer'>
            <div className="subHeader">
              <div className="subNavMenu">
                  <p className="subMenuItem">About</p>
                  <p className="subMenuItem">Services</p>
              </div>
              <div className="logo">
                Yonela Johannes
              </div>
              <div className="bookButton subMenuItem">
                Book
              </div>
                <Link to='/blog'>
                    <span clasName='subMenuItem'>Blog</span>
                </Link>
            </div>
      <div className='landingContentContainer'>
        <div className='landing'>
            <div className="homeContainer container">
                <div className="homeContent">
                    <div className="homeSocial">
                        <img src={displayImage} className="homeImg" alt="'user" />
                        <div className="navListOne">
                            <div className="listItemsOne"><a href="tel:0840316308"><MdAddCall className="icon" /></a></div>
                            <div className="listItemsOne"><a href="mailto:johannesyonela@gmail.com"><MdEmail className="icon" /></a></div>
                            <div className="listItemsOne"><a href="https://github.com/Yonela-Johannes" rel="norefferer" target="_blank"><FaGithubAlt className="icon" /></a></div>
                            <div className="listItemsOne"><a href="https://wa.me/0693564159" target="_blank"rel="norefferer"><RiWhatsappFill className="icon" /></a></div>
                        </div>
                    </div>
                    <div className="homeData">
                        <p className="homeDescription">With extensive knowlegde and high understanding of
                            Web-Application development, And producing quality work</p>
                        <div className="button--flex">
                            My CV
                        </div>
                    </div>
                </div>
            </div>
          <div className='landingContainer'>
            <img className='landingImage' src={landingImage} alt='pc, pen and laptop' />
            <img className='landingImageTwo' src={landingImageThree} alt='pc, pen and laptop' />
            <div className='landingContainerBox'>
            </div>
            <div className='landingContainerBoxTwo'>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing