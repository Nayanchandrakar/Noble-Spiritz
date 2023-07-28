"use client"
import Image from "next/image"
import { SlCalender } from "react-icons/sl"
import moment from "moment"

const PostDetail = ({
  content,
  createdAt,
  created_by,
  image_url,
  topic_desc,
  topic_title,
}) => {
  return (
    <>
      <div className="bg-white shadow-custom-black rounded-lg lg:p-8 pb-12 mb-8 ">
        <div className="relative overflow-hidden shadow-md mb-6">
          <Image
            src={image_url}
            alt="main_blog_image"
            className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg "
            width={10}
            height={10}
            sizes="100"
          />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 ">
              <Image
                alt={"empty_now"}
                height={30}
                width={30}
                className="align-middle rounded-full"
                src={"/logo.jpg"}
              />
              <strong className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                {"noble-spiritz"}
              </strong>
            </div>
            <div
              className="font-medium flex flex-row gap-3
              items-center text-gray-700"
            >
              <SlCalender size={30} color="#ff08a4" />
              <span className="align-middle">
                {moment(createdAt).format("MMMM Do YYYY")}
              </span>
            </div>
          </div>
          <h1 className="text-3xl font-semibold">{topic_title}</h1>
          <p className=" mt-1 mb-2">{topic_desc}</p>
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </>
  )
}
export default PostDetail
