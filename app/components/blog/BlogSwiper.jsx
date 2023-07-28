"use client"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Pagination, Navigation } from "swiper"
import Container from "../Container"
import Card from "./Card"
import HeadingShortner from "../HeadingShortner"
import useBlogs from "@hooks/useBlogs"
import { shallow } from "zustand/shallow"
import axios from "axios"

const BlogSwiper = () => {
  const { setBlogdata, blogData } = useBlogs(
    (state) => ({
      setBlogdata: state.setBlogdata,
      blogData: state.blogData,
    }),
    shallow
  )

  const getBlog = async () => {
    const res = await axios.get(
      "http://mws.dignityofnoble.org/api/v1/blog-posting/published-diligent-topics"
    )
    setBlogdata(res.data.data)
  }

  useEffect(() => {
    if (blogData) {
      console.log("data is already present in the api")
    } else {
      getBlog()
    }
  }, [])

  return (
    <>
      <section
        className="
            py-16
        "
      >
        <Container>
          <HeadingShortner headline={"Trending Blogs"} />

          <div
            className="
                my-12
            "
          >
            <Swiper
              spaceBetween={30}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
                1536: {
                  slidesPerView: 5,
                },
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
              {blogData?.map((blogs) => {
                return (
                  <SwiperSlide>
                    <Card {...blogs} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </Container>
      </section>
    </>
  )
}
export default BlogSwiper
