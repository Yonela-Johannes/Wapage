import './myskills.css'
import { GiSpeedometer } from 'react-icons/gi'
import { MdDevices } from 'react-icons/md'
import { BiCodeAlt } from 'react-icons/bi'
import { BsBrushFill} from 'react-icons/bs'
import { MdDynamicFeed } from 'react-icons/md'

const MyServices = props => {
  return (
        <section className="skills">
          <div class='skillsCover'>
          <h1 className='skillsTitle'>My Skills</h1>
                    <div className="skillsContainer">
                            <div className="skillsContent">
                                <h2 className="detailsTitle">My Service</h2>
                                    <span className="detailsSubtitle">I love to create designs which speaks, keep it clear, minimal and simple.</span>
                                    <div className="container">
                                        <div className="skillsData">
                                            <div className="skillsDescription">
                                                <h2>Fast</h2>
                                                <GiSpeedometer className='icon speedometer' />
                                                <p>fast load and lag-free interaction.</p>
                                            </div>
                                            <div className="skillsDescription">
                                                <h2>Responsive Design</h2>
                                                <MdDevices className='icon speedometer' />
                                                <p>My layout will work on any device, big or small.</p>
                                            </div>
                                        </div>
                                        <div className="skillsData">
                                            <div className="skillsDescription">
                                                <h2>Web-Design</h2>
                                                <BiCodeAlt className='icon speedometer' />
                                                <p>fast load and lag-free interaction.</p>
                                            </div>
                                            <div className="skillsDescription">
                                                <h2>Graphic Design</h2>
                                                <BsBrushFill className='icon speedometer' />
                                                <p>fast load and lag-free interaction.</p>
                                            </div>
                                        </div>
                                        <div className="skillsData">
                                                <div className="skillsDescription">
                                                <h2>Dynamic</h2>
                                                <MdDynamicFeed className='icon speedometer' />
                                                <p>You website don't have to be static. I love making pages come to life.</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                    </div>
          </div>
      </section>
  )
}

export default MyServices