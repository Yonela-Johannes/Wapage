import displayImage from '../img/yonelajohannes.png'
import About from './About';
import { FaGithubAlt } from "react-icons/fa";
import { MdEmail, MdAddCall} from "react-icons/md";
import MyServices from './MyServices';
import { RiWhatsappFill} from "react-icons/ri";
import { useState } from 'react';

function Main() {
    const [aboutDisplay, setAboutDisplay] = useState(true)
    const [serviceDisplay, setServiceDiplay] = useState(true)

    const handleClick = () => setAboutDisplay(!aboutDisplay)
    const serviceClick = () => setServiceDiplay(!serviceDisplay)

    return (
        <div className='main'>
                <section className="home section" id="home">
                    {/* <div className="homeButtons">
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
                    </div> */}
                    {/* {aboutDisplay &&  <About aboutDisplay={aboutDisplay} /> } */}
                </section>
        </div>
  )
}

export default Main