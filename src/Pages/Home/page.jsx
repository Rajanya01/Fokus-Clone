import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from './Header/Header'
import Flavor from './Flavor/Flavor'
import Bottles from './Bottles/Bottles'
import Slideshow from "./SlideAuto/SlideAuto"
import KnowFokus from './KnowFokus/KnowFokus'
import Footer from '../../components/Footer/Footer'
import Creator from './Creators/page'

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <Flavor />
            <Bottles />
            <Slideshow />
            <KnowFokus />
            <Creator />
            <Footer />
        </>
    )
}
