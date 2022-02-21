import React from 'react'
import Banner from '../Banner/Banner'
import Menu from '../Menu/Menu'

import './Header.css'

const Header = () => {
    return (
        <>
            <div className='sticky-top'>
                <Menu id='home'></Menu>
            </div>
            <Banner></Banner>
        </>
    )
}

export default Header