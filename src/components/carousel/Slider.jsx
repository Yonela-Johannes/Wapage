import { useState } from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import Landing from '../Landing'
import './slider.css'

function Slider() {
    const [pageIndex, setPageIndex] = useState(0)
    const pages = [<Landing />, <Landing />, <Landing />, <Landing /> ]
    const directionHander = (direction) => {

    }
  return (
    <div className='mainSliderContainer'>
        <div className='arrow left' onClick={() => directionHander('left')}>
                <AiFillCaretLeft className='mainSliderIcon'/>
        </div>
        <div className='mainSlideWrapper'>
            <div>
                <div className='mainSlide'>
                    {pages.map(page => page)}                                    
                </div>
            </div>
        </div>
        <div className='arrow right' onClick={() => directionHander('right')}>
            <AiFillCaretRight className='mainSliderIcon'/>
        </div>
    </div>
  )
}

export default Slider