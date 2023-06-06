'use client'

import Image from "next/image"
import Container from "../Container"

const Vision = () => {

    const VisionContent = [
        { heading:'Vision' ,  image: '/Vision/vision.png' , para:'To Empower people with Barriers' },

        { heading:'mission' ,  image: '/Vision/mission.png' , para:'Build self-esteem for people with barriers by coaching life-skills and empowering them to become entrepreneurs.' },

        { heading:'values' ,  image: '/Vision/values.png' , para:'Believe in Self Foster Kinship Grow Together' },
        
        { heading:'strategy' ,  image: '/Vision/strategy.png' , para:'Promote life skills, Entrepreneurship and Innovation' },

    ]

    return(
        <Container>
        <div 
         className="
            grid
            gap-4
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
        ">
            {VisionContent?.map((elem,index) => {
                return(
                    <>
                    <div 
                        key={index + 34234}
                        className="
                            flex
                            flex-col
                            gap-1
                            mt-10
                            items-center
                    ">
                            <span 
                            className="
                                text-4xl
                                uppercase
                                font-bold
                                text-black
                            ">
                                {elem?.heading}
                            </span>

                            <Image
                                alt="Local_image"
                                width={250}
                                height={250}
                                src={elem?.image}
                            />
                            <p 
                            className="
                            text-md
                            mt-3
                            text-gray-700
                            ">
                                {elem?.para}
                            </p>

            </div>
                    </>
                )
            })}
        </div>
        </Container>
    )
}
export default Vision