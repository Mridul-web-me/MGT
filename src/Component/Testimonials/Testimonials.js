import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
// import Swiper from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css/bundle";
import './Testimonials.css'
import pic1 from '../../img/assets/Teacher Profile/lipi.jpg'
import pic2 from '../../img/assets/Teacher Profile/masud.jpg'
import pic3 from '../../img/assets/Teacher Profile/shkhawat hossain.jpg'
import pic4 from '../../img/assets/Teacher Profile/Alamgir_Mollah.jpg'
import pic5 from '../../img/assets/Teacher Profile/519779.jpg'
import pic6 from '../../img/assets/Teacher Profile/abir.jpg'
import pic7 from '../../img/assets/Teacher Profile/258755.jpg'
import pic8 from '../../img/assets/Teacher Profile/surajit.jpg'
import pic9 from '../../img/assets/Teacher Profile/liza.jpg'
import { Link } from 'react-router-dom';

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
                   <Link to='/nusrat-sharmin-lipy'>
                        <div>
                            <img src={pic1} alt="" />
                            <h5>Nusrat Sharmin Lipy <br />
                                Assistant Professor & Chairman</h5>
                            <p>Cell :01744998866 <br />
                                Email :nslipy@bu.ac.bd</p>
                        </div>
                        </Link>
                    </SwiperSlide>
                   
                    <SwiperSlide>
                       <Link to='/dr-abdullah-al-masud'>
                       <div>
                            <img src={pic2} alt="" />
                            <h5>Dr. Abdullah Al Masud <br />
                                Assistant Professor</h5>
                            <p>Cell :+8801711968949 <br />
                                Email :masud_ru_bd@yahoo.com</p>
                        </div>
                           </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/md-shakhawat-hossain">
                        <div>
                            <img src={pic3} alt="" />
                            <h5>Md. Shakhawat Hossain <br />
                                Assistant Professor</h5>
                            <p>Cell :01711352874 <br />
                                Email :mshahossain@bu.ac.bd; abir.md@gmail.com</p>
                        </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/md-alamgir-mollah">
                        <div>
                            <img src={pic4} alt="" />
                            <h5>Md. Alamgir Mollah <br />
                                Assistant Professor</h5>
                            <p>Cell :+8801790035425 <br />
                                Email :alamgir1003@yahoo.com</p>
                        </div>
                            </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Link to="/tazizur-rahman">
                       <div>
                            <img src={pic5} alt="" />
                            <h5>Tazizur Rahman <br />
                                Assistant Professor</h5>
                            <p>Cell :+8801710407384 <br />
                                Email :trahman@bu.ac.bd</p>
                        </div>
                       </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Link to="/md-abir-hossain">
                       <div>
                            <img src={pic6} alt="" />
                            <h5>
                                MD. ABIR HOSSAIN <br />
                                Assistant Professor
                            </h5>
                            <p>
                                Cell :+8801722504414 <br />
                                Email :mahossain@bu.ac.bd
                            </p>
                        </div>
                       </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/md-sohel-chowdhury">
                        <div>
                            <img src={pic7} alt="" />
                            <h5>
                                Md. Sohel Chowdhury <br />
                                Assistant Professor
                            </h5>
                            <p>
                                Cell :+8801911285898 <br />
                                Email :mschowdhury@bu.ac.bd
                            </p>
                        </div>
                            </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Link to="/surajit-kumar-mondol">
                       <div>
                            <img src={pic8} alt="" />
                            <h5>
                                Surajit Kumar Mondal <br />
                                Lecturer
                            </h5>
                            <p>
                                Cell :01747399170 <br />
                                Email :surajitbumgt@gmail.com
                            </p>
                        </div>
                       </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Link to="/saima-afrin-liza">
                       <div>
                            <img src={pic9} alt="" />
                            <h5>
                                Saima Afrin Liza <br />
                                Lecturer
                            </h5>
                            <p>
                                Cell :01634116076 <br />
                                Email :afrinliza1991@gmail.com
                            </p>
                        </div>
                       </Link>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </div>
    )
}

export default Testimonials