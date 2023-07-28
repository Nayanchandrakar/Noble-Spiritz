"use client"
import Image from "next/image"
import { AiFillStar } from "react-icons/ai"
import { BsPersonCircle } from "react-icons/bs"
import Link from "next/link"

const Card = ({
  content,
  createdAt,
  created_by,
  image_url,
  topic_desc,
  topic_title,
}) => {
  const id = createdAt.length + topic_title.length + topic_desc.length

  return (
    <div
      className="
            w-full
            h-fit
            rounded-lg
            border
            border-gray-200
            bg-white
            group
            group-hover:scale-75
        "
    >
      <Link
        href={`/blog/${id}`}
        className="
              flex
              flex-col
              gap-3
              "
      >
        <div className=" w-full h-[12rem] flex justify-center items-center">
          <Image
            width={10}
            height={10}
            sizes="100"
            className="h-full w-full object-contain rounded-t-lg"
            src={image_url}
            alt="image_background"
          />
        </div>

        <div
          className="
                    flex
                    flex-col
                    gap-3
                    px-4
                    pb-4
                "
        >
          <span
            className="
                            text-base
                            font-bold
                            flex
                            justify-start
                        "
          >
            Complete Html course
          </span>
          <p
            className="
                        text-sm
                        text-gray-400
                        text-start
                    "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            tempora ut libero eius nam hic sapiente corporis omnis
          </p>

          <span
            className="
                       text-sm
                       text-sky-400
                       group-hover:text-blue-600
                       cursor-pointer
                       transition-color
                       text-start
                    "
          >
            read more
          </span>
        </div>
      </Link>
    </div>
  )
}
export default Card
