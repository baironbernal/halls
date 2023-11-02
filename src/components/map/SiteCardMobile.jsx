import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import SiteCard from './SiteCard';

const SiteCardMobile = ({info}) => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          {info && info.map((item, index) => (  
              <SiteCard
                  key={index}
                  name={item.name} 
                  hours={item.hours} 
                  address={item.address} />
            ))}
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SiteCardMobile
