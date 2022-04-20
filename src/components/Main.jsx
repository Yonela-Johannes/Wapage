import displayImage from '../img/yonelajohannes.png'
import About from './About';
import { FaGithubAlt } from "react-icons/fa";
import { MdEmail, MdAddCall} from "react-icons/md";
import MyServices from './MyServices';
import { RiWhatsappFill} from "react-icons/ri";
import { useState } from 'react';

function Main() {
    const [aboutDisplay, setAboutDisplay] = useState(true)
    const [serviceDisplay, setServiceDiplay] = useState(false)

    const handleClick = () => setAboutDisplay(!aboutDisplay)
    const serviceClick = () => setServiceDiplay(!serviceDisplay)

    return (
        <div className='main'>
                <section className="home section" id="home">
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
                                <h1 className="homeTitle">Yonela Johannes</h1>
                                <h3 className="homeSubtitle">Agile Web-Developer</h3>
                                <p className="homeDescription">With extensive knowlegde and high understanding of
                                    Web-Application development, And producing quality work</p>
                                <div className="button--flex">
                                    My CV
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="homeButtons">
                        <div className="homeButtonsContent">
                            <div onClick={handleClick} className={`homeButtonsData about ${aboutDisplay && 'buttonActive' } `}>
                                <div className="button-float detailsButton">
                                    <p>About</p>
                                </div>
                            </div>
                            <div onClick={serviceClick} className={`homeButtonsData about ${serviceDisplay && 'buttonActive' } `}>
                                <div className="button-float detailsButton">
                                    <p>My Services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {aboutDisplay &&  <About aboutDisplay={aboutDisplay} /> }
                    {serviceDisplay && <MyServices />}
                </section>
        </div>
  )
}

export default Main