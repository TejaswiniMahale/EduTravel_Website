import React from 'react'
import "react-slideshow-image/dist/styles.css";
import { Slide } from 'react-slideshow-image';
import SimpleImageSlider from "react-simple-image-slider";

const images1 = [
    { url: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
    { url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" },
    { url: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" },
    { url: "https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },

  ]
const SlidingImages = () => {
  return (
    <div style={{height:"470px"}}>
        <SimpleImageSlider 
     
     width={"100%"}
     height={"470px"}
     images={images1}
     showBullets={true}
     showNavs={true}
     slideDuration={1.5}
     loop={true}
     autoPlay={true}
     />
    </div>
  )
}

export default SlidingImages