import React from 'react'
import Helmet from 'react-helmet'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
    return (
        <div>
              <Helmet>
             
             <title>Management Studies | Home</title>
         </Helmet>
            <Banner></Banner>
            <About></About>
            <Testimonials></Testimonials>
            
        </div>
    )
}

export default Home