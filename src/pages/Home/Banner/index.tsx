import React from "react";
import "./style.scss";
import { Swiper, SwiperSlide,  } from "swiper/react"; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data =[
    {
      id: 1, image: "./imagens/Banners/BannerCarrossel1.png"
    },
    {
      id: 2, image: "./imagens/Banners/BannerCarrossel2.png"
    },
    {
      id: 3, image: "./imagens/Banners/BannerCarrossel3.png"
    }
  ]


class Banner extends React.Component {
    render() {
        return (
          <div className="Banner">

          
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={true}
            navigation={true}            
            >
             {data.map((item) => (
               <SwiperSlide key={item.id}>
                 <img
                   src={item.image}
                   alt=""
                   className="slide-item banner"
                 />
               </SwiperSlide>
             ))}
       
            </Swiper>
            </div>
        );
    }
}


export default Banner;
