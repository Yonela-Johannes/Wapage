import  SwiperSlider from './SwiperSlider'
import './projects.css'


const Projects = () => {


  return (
        <div className='projectsMainContainer'>
          <h1 className='projectsTitle'>Creative Developer</h1>
              <h1>Frontend</h1>
              <div className='swiper'>
                <SwiperSlider />
            </div>
      </div>
  )
}

export default Projects