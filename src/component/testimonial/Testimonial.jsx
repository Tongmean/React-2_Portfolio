import React from 'react'
import './testimonial.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const data =[
    {
      name:"Tong",
      desc:"I love ypu too much",
      pic:"https://images.pexels.com/photos/38440/night-view-goguryeo-jung-achasan-republic-of-korea-38440.jpeg?cs=srgb&dl=pexels-pixabay-38440.jpg&fm=jpg",
    },
    {
      name:"Tong",
      desc:"I love ypu too much",
      pic:"https://images.pexels.com/photos/38440/night-view-goguryeo-jung-achasan-republic-of-korea-38440.jpeg?cs=srgb&dl=pexels-pixabay-38440.jpg&fm=jpg",
    },
    {
      name:"Tong",
      desc:"I love ypu too much",
      pic:"https://images.pexels.com/photos/38440/night-view-goguryeo-jung-achasan-republic-of-korea-38440.jpeg?cs=srgb&dl=pexels-pixabay-38440.jpg&fm=jpg",
    },
    {
      name:"Tong",
      desc:"I love ypu too much",
      pic:"https://images.pexels.com/photos/38440/night-view-goguryeo-jung-achasan-republic-of-korea-38440.jpeg?cs=srgb&dl=pexels-pixabay-38440.jpg&fm=jpg",
    },
    {
      name:"Tong",
      desc:"I love ypu too much",
      pic:"https://images.pexels.com/photos/38440/night-view-goguryeo-jung-achasan-republic-of-korea-38440.jpeg?cs=srgb&dl=pexels-pixabay-38440.jpg&fm=jpg",
    },

  ]
  return (
    <div className='container testimonial-section'>
        <div className='testimonial-title'>
            <h2>Testimonial</h2>
            <span className='line-testimonial'></span>
        </div>
        <div>
          <div className='content-slider'>
            <Slider {...settings}>
              {data.map((i, index)=>(
                <div className='slider-detail' key={index}>
                  <img src={i.pic} alt="pic" className="slider-pic" />
                  <p>{i.name}</p>
                  <p>{i.desc}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        

    </div>
  )
}

export default Testimonial