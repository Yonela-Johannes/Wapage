
function Pages(props) {
    const {pages, mainSlide}  = props
  return (
    <mainSlide style={{display: 'flex'}}>{
        pages.map(page => page)
        }</mainSlide>
  )
}

export default Pages