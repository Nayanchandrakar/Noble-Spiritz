"use client"
import Image from "next/image"
import Link from "next/link"
import moment from "moment"

const PostWidget = ({ recentblogs }) => {
  return (
    <div className="bg-white shadow-custom-black rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {false ? "Related Posts" : "Recent Posts"}
      </h3>
      {recentblogs?.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              alt="image_not"
              height={60}
              width={60}
              unoptimized
              className="align-middle rounded-full"
              src={post?.image_url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post?.createdAt).format("MMMM Do YYYY")}
            </p>
            <Link
              href={`/blog/${Number(
                post?.createdAt?.length +
                  post?.topic_title?.length +
                  post?.topic_desc?.length
              )}`}
              className="text-md"
              key={index}
            >
              {post?.topic_title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
export default PostWidget
