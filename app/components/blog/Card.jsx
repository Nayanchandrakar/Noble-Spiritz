'use client'
import Image from "next/image"
import {AiFillStar} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import Link from 'next/link'

const Card = () => {
    return(
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
        ">
              <Link 
              href={'/blog/1234'}
              className="
              flex
              flex-col
              gap-3
              "
              >

                <Image
                    width={10}
                    height={10}
                    sizes="100"
                    className="
                    w-full
                    h-[8rem]
                    object-cover
                    "
                    src={'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230305182658/HTML-tutorial.jpg'}
                    alt="image_background"
                />

                <div 
                className="
                    flex
                    flex-col
                    gap-3
                    px-4
                    pb-4
                ">
                    <div
                     className="
                        flex
                        flex-row
                        gap-4
                        items-center
                     ">
                        {/* <Image
                            width={30}
                            height={30}
                            src={'https://mws-uploads.s3.ap-south-1.amazonaws.com/images/94257defc3b71fe75d1977fcb716eac9'}
                            alt="person_image"
                            className="
                            rounded-full
                            "
                        /> */}

                        <BsPersonCircle
                            size={30}
                            color="gray"
                        />
                        <strong
                            className="
                                text-sky-500
                                text-sm
                                font-bold
                            "
                        >
                            Andrew christopher
                        </strong>
                    </div>
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
                    ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora ut libero eius nam hic sapiente corporis omnis
                    </p>
                    <div 
                    className="
                        flex
                        flex-row
                        gap-2
                        text-sm
                        items-center
                        text-gray-700
                    ">rating:
                       {[1,2,3,4].map((elem,index) => {
                        return(
                        <>
                        <AiFillStar
                            size={20}
                            color="#fccf03"
                        />
                        </>
                        )
                       })}
                    </div>
                    <span 
                    className="
                       text-sm
                       text-sky-400
                       group-hover:text-blue-600
                       cursor-pointer
                       transition-color
                       text-start
                    ">
                        read more 
                    </span>
                </div>
              </Link>
        </div>
    )
}
export default Card