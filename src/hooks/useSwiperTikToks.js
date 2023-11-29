import { useEffect, useRef} from 'react';
import useFolderRoot from './useFolderRoot';

const useSwiperTikToks = () => {

    const swiperRef = useRef(null);  
    const { videos } = useFolderRoot();
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on('slideChange', () => {
        const videos = document.querySelectorAll('.swiper-slide video');

        videos.forEach((video, index) => {
          if (index === swiperRef.current.swiper.activeIndex) {
            video.play();
          } else {
            video.pause();
          }
        });
      });
    }
  }, []);

  return { videos, swiperRef};
};

export default useSwiperTikToks;
