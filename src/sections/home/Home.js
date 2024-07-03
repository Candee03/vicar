import React from 'react'
//provider
import {homeBanner} from '../../data/data.js'
//component
import Carousel from '../../components/carousel/Carousel.js'

const Home = () => {
    return (
        <>
            <Carousel timeOut='4000' data={homeBanner} arrows={'false'}/>
        </>
    )
}

export default Home