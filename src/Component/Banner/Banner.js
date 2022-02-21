import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { Swiper } from 'swiper'
import "swiper/css/bundle";
import "./Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import banner1 from '../../img/assets/banner1.png'
import banner2 from '../../img/assets/banner2.jpg'
import banner3 from '../../img/assets/banner3.jpg'

const Banner = () => {
    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <div id='home'>
            <Container fluid>
                {/* <Slider {...settings}>
                    <div>
                        <img src={banner1} alt="" fluid />
                    </div>
                    <div>
                        <img src={banner2} alt="" fluid />
                    </div>
                    <div>
                        <img src={banner3} alt="" fluid />
                    </div>
                </Slider> */}
                <Swiper spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper">
                    <SwiperSlide>
                        <img src={banner1} alt="" fluid />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={banner2} alt="" fluid />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={banner3} alt="" fluid />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </div>
    )
}

export default Banner