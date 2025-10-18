import React from 'react'
import VideoSlider from '../Components/Home/VideoSlider'
import Slider from '../Components/Home/ImageSlider'
import Dma from '../Components/Home/Dma'
import Crop from '../Components/Home/Crop'
import News from '../Components/Home/News'
import CoverImg from '../Components/Home/Cards'



const Home = () => {
  return (
    <>
      <Slider />
      <CoverImg />
      <Dma />
      <Crop />
      <News/>
      <VideoSlider />

    </>
  )
}

export default Home
