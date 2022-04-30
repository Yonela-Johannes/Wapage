import './slider.css'

const Slider = ({web}) => {
  return (
    <div className='imageCardContainer'>
            <img className='image' src={web.image} alt="site" />
            <div className='image-card-bg'>
              <div className='imageInnerContainer'>
                <div className='name name-title'>{web.name}</div>
              </div>
              <div className='name'>{web.name}</div>
            </div>
    </div>
  )
}

export default Slider