import React from 'react'
//provider
import { data } from '../../data/data'
//component
import CarouselDos from '../../components/carousel/carouselDos'

const Home = () => {
    return (
        <>
            <CarouselDos imgSize='200' timeOut='5000' data={data} arrows={'false'}/>
        </>
    )
}

export default Home