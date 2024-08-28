import React from 'react'
//provider
import {homeBanner, homeBannerDesktop} from '../../data/data'
//component
import Carousel from '../../components/carousel/Carousel'
import { useMediaQuery } from 'react-responsive';

const Home = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)'});
    return (
        <>
            {isMobile?
            <Carousel timeOut='4000' data={homeBanner} arrows={'false'}/>
            :
            <Carousel timeOut='4000' data={homeBannerDesktop} arrows={'false'}/>
        }
        </>
    )
}

export default Home