
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import './slider.css'

function Slider() {
  return (
    <div className='mainSliderContainer'>
        <div className='arrow left'>
                <AiFillCaretLeft className='mainSliderIcon'/>
        </div>
        <div className='mainSliderWrapper'>
            
        </div>
        <div className='arrow right'>
            <AiFillCaretRight className='mainSliderIcon'/>
        </div>
    </div>
  )
}

export default Slider