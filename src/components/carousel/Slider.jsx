import Landing from '../Landing'
import Main from '../Main'
import Projects from '../Projects'
import MyServices from '../MyServices'
import styled from 'styled-components'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import './slider.css'
import Pages from './Pages'
function Slider() {
  let style = ''
  const pages = [<Landing />, 
    <Landing />,
    <Landing />,
  ]
  const directionHander = (direction) => {

  }

  const MainSliderContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100vh;
  `
  const Arrow = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 40px;
    height: 40px;
    margin: auto;
    top: 0;
    bottom: 0;
    cursor: pointer;
    opacity: 0.5;
    transition: .1s ease-out;
    z-index: 5;  
  `
  const MainSlideWrapper = styled.div`
    width: 100%;
  `

const mainSlide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgb(202, 202, 202);

`

  return (
    <MainSliderContainer>
        <Arrow className='left' onClick={() => directionHander('left')}>
                <AiFillCaretLeft className='mainSliderIcon'/>
        </Arrow>
        <MainSlideWrapper className='mainSlideWrapper'>
            <Pages styles={style} slide={mainSlide} className='mainSlide' pages={pages} />
        </MainSlideWrapper>
        <Arrow className='right' onClick={() => directionHander('right')}>
            <AiFillCaretRight className='mainSliderIcon'/>
        </Arrow>
    </MainSliderContainer>
  )
}

export default Slider