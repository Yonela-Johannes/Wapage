import {Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import Slider from './Slider'
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import data from '../data/data'


console.log(data)
const SwiperSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      // observer = "true"
      // observeParents = "true"
      navigation
      autoplay={{delay: 4500}}
      // pagination={{
      //   el: "swiper-pagination",
      //   type: "bullets",
      //   clickable: true}}
      // scrollbar={{draggable:true}}
      onSlideChange={() => 'slide change'}
      onSwiper={(swiper) => swiper}
    >
      {data.map(web => (
        <SwiperSlide>
          <Slider web={web} />
        </SwiperSlide>
        )
      )}
    </Swiper>

  )
}

export default SwiperSlider