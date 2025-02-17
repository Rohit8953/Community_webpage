import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {textimonialdata} from '../../Data/Alldata'

const Testimonial = () => {
    var settings = {
        dots:true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToScroll: 1,
        slidesToShow:1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        pauseOnFocus: true,
      };

  return (
    <div className='w-full mt-[2rem] mb-[2rem]' >
        <div className=' w-[85%] mx-auto  ' >
         <Slider {...settings} >  
          {
            textimonialdata.map((items)=>{
                return(
                    <div className="w-[85%]  " >
                        <div className=" p-6 rounded-[8px]" style={{background:items.colors}}>
                            <div className='flex flex-row gap-2'>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 40.0005C31.0277 40.0005 40 31.0282 40 20.0005C40 16.7252 39.1373 13.6637 37.7383 10.9341L36 7.99854L33 4.99854L29.0566 2.2583C26.3293 0.862223 23.2723 0.000490634 20 0.000490347C8.9723 0.000489383 2.71253e-06 8.97278 1.74846e-06 20.0005C7.84383e-07 31.0282 8.97229 40.0005 20 40.0005ZM26 26.9985C23.791 26.9985 22 25.2075 22 22.9985C22 22.9125 22.0204 22.8316 22.0254 22.7466C22.0114 22.6656 22 22.5826 22 22.4966C22 22.2216 22.0526 15.7084 26.5996 12.2974C26.8696 12.0954 27.185 11.9966 27.498 11.9966C27.954 11.9966 28.4042 12.2051 28.6992 12.5981C29.1962 13.2611 29.0624 14.2008 28.4004 14.6978C26.8924 15.8288 26.0568 17.5196 25.5898 19.0396C25.7268 19.0256 25.859 18.9985 26 18.9985C28.209 18.9985 30 20.7895 30 22.9985C30 25.2075 28.209 26.9985 26 26.9985ZM14 26.9985C11.791 26.9985 10 25.2075 10 22.9985C10 22.9125 10.0204 22.8316 10.0254 22.7466C10.0114 22.6656 10 22.5826 10 22.4966C10 22.2216 10.0526 15.7084 14.5996 12.2974C14.8696 12.0954 15.185 11.9966 15.498 11.9966C15.954 11.9966 16.4042 12.2051 16.6992 12.5981C17.1962 13.2611 17.0624 14.2008 16.4004 14.6978C14.8924 15.8288 14.0568 17.5195 13.5898 19.0396C13.7268 19.0256 13.859 18.9985 14 18.9985C16.209 18.9985 18 20.7895 18 22.9985C18 25.2075 16.209 26.9985 14 26.9985Z" fill="#8064A2"/>
                                </svg>
                                <h2 className="text-2xl font-[600] text-gray-800 mb-6">Testimonials</h2>
                            </div>

                            <div className="gap-6">
                            <div className="p-1">
                                <p className="text-gray-700 font-[300] text-[18px]">
                                {items.quote}
                                </p>

                                <div className="mt-6 flex flex-col items-center gap-5 sm:gap-0 sm:flex-row justify-between">
                                    <audio controls className="w-full sm:w-[25rem] ">
                                        <source src="/audio/testimonial-1.mp3"  className='' type="audio/mpeg" />
                                    </audio>
                                    <div className=" flex flex-row justify-around items-center mb-4">
                                        <img src={items.image} className="w-12 h-12 rounded-full" />
                                        <div className="ml-4">
                                            <h3 className="text-xl font-bold flex shrink-0 text-[#8064A2]">{items.name}</h3>
                                            <p className="text-[#0096C8]">{items.profession}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            </div>
                        </div>
                    </div>
                )
            })  
          }
         </Slider>
        </div>
    </div>
  )
}

export default Testimonial