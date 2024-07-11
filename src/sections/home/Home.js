import React from 'react'
//provider
import {homeBanner, homeBannerDesktop} from '../../data/data.js'
//component
import Carousel from '../../components/carousel/Carousel.js'
import { useMediaQuery } from 'react-responsive';

const Home = () => {
    const isMpbile = useMediaQuery({ query: '(max-width: 600px)'});
    return (
        <>
            {isMpbile?
            <Carousel timeOut='4000' data={homeBanner} arrows={'false'}/>
            :
            <Carousel timeOut='4000' data={homeBannerDesktop} arrows={'false'}/>
        }
        </>
    )
}

export default Home