import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
// import Swiper from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css/bundle";
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <Container>
                <h2>Our Teacher</h2>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
                            <h4>Teacher profile 1</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
                            <h4>Teacher Profile 2</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
                            <h4>Teacher Profile 3</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
                            <h4>Teacher Profile 4</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
                            <h4>Teacher Profile 5</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
                            <h4>Teacher Profile 6</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
                            <h4>Teacher Profile 7</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
                            <h4>Teacher Profile 8</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
                            <h4>Teacher Profile 9</h4>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </div>
    )
}

export default Testimonials