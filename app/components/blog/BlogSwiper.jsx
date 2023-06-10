'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Container from "../Container";
import Card from "./Card";
import HeadingShortner from "../HeadingShortner";


const BlogSwiper = () => {


const SliderData = [
    {heading:'' , rating:'' , }
]



    return(
        <>
        <section
         className="
            py-16
        ">
        <Container>
            <HeadingShortner
                headline={'Trending Blogs'}
            />

            <div 
            className="
                my-12
            ">
            <Swiper
            spaceBetween={30}
            breakpoints={{
                300:{
                    slidesPerView:1,
                },
                768:{
                    slidesPerView:2
                },
                1024:{
                    slidesPerView:3
                },
                1280:{
                    slidesPerView:4
                },
                1536:{
                    slidesPerView:5
                }
            }}
            autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
        <SwiperSlide>
            <Card/>
        </SwiperSlide>

        <SwiperSlide>
            <Card/>
        </SwiperSlide>

        <SwiperSlide>
            <Card/>
        </SwiperSlide>

        <SwiperSlide>
            <Card/>
        </SwiperSlide>

        <SwiperSlide>
            <Card/>
        </SwiperSlide>

        </Swiper>
        </div>
        </Container>
    </section>
    </>)
}
export default BlogSwiper