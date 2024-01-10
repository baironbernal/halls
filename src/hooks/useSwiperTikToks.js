import { useEffect, useRef, useState} from 'react';
import useFolderRoot from './useFolderRoot';

const useSwiperTikToks = () => {

    const swiperRef = useRef(null);  
    const { videos } = useFolderRoot();
    const [infoVideo, setInfoVideo] = useState({
      url: '',
      username: ''
    })
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on('slideChange', () => {
        const videos = document.querySelectorAll('.swiper-slide video');

        videos.forEach((video, index) => {
          if (index === swiperRef.current.swiper.activeIndex) {
            video.play();
            setInfoVideo({
              url: video.getAttribute("url"),
              username: video.getAttribute("username")
            })
          } else {
            video.pause();
          }
        });
      });
    }
  }, []);

  return { videos, swiperRef, infoVideo};
};

export default useSwiperTikToks;
