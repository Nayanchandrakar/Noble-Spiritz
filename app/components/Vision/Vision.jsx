'use client'
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"
import { fadeIn  } from "@utils/Motion"
import  MotionWrapper   from "../../Hoc/MotionWrapper"
import Image from "next/image"
import Container from "../Container"


const TiltComponent = ({ 
    index, 
    heading, 
    image,
    para, 
}) => {
    return (
        <motion.div 
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        >
            
            <Tilt
                key={`mainkey234${index}`}
                perspective={500}
                className="
                flex 
                justify-center 
                items-center  
                flex-col 
                overflow-x-hidden 
                parallax-effect
                group
                ">
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className="
                    inner-element 
                    h-[18rem] 
                    w-full 
                    rounded-xl 
                    bg-white/[.2]
                    backdrop-blur-xs
                     relative
                    ">
                    <Image
                        src={image}
                        className="
                            w-full
                            h-full
                            rounded-lg 
                            absolute
                            inset-0
                            bg-transparent
                        "
                        alt="no_image"
                        width={40}
                        height={40}
                        sizes="100"
                    />
                    <div
                        className="
                            w-full
                            h-full
                            absolute
                            inset-0
                            bg-black/[.5]
                            transition-all
                            duration-400
                            group-hover:bg-black/[.7]
                            rounded-lg
                        "
                    />
                    <div
                        className="
                            w-full
                            h-full
                            absolute
                            z-[30]
                            p-6
                        "
                    >
                    <h1 
                    className="
                    text-3xl 
                    bg-transparent
                    text-white
                    text-bold
                    ">
                        {heading}
                    </h1>
                    <p 
                    className="
                    text-lg
                    mt-4
                    text-gray-300
                    text-start
                    ">
                        {para}
                    </p>
                    </div>
                </div>
            </Tilt>
        </motion.div>
    )
}

const Vision = () => {


    const VisionContent = [
        { heading:'Vision' ,  image: '/Vision/vision.png' , para:'Universal education for empowerment and positive change.' },

        { heading:'mission' ,  image: '/Vision/mission.png' , para:'Our mission is to provide free education to all, empowering individuals and fostering positive change.' },

        { heading:'values' ,  image: '/Vision/values.png' , para:'Accessibility, Inclusivity, Quality, Empowerment, Collaboration, Continuous Improvement, and Ethical Conduct' },
        
        { heading:'strategy' ,  image: '/Vision/Strategy.png' , para:'Utilizing technology, partnerships, and community engagement to provide free education globally, while staying adaptable and innovative' },

    ]


    return (<>
        <div 
        className="
         my-[6rem]
         relative
        ">
            <Image
                alt="tailwind"
                src="https://tailwindui.com/img/beams-home@95.jpg"
                width={20}
                height={20}
                sizes='100'
                className="
                    w-full
                    h-full
                    absolute
                "
            />
            <Container>
            <div 
            className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-4 
                mt-[4rem] 
                gap-6
            ">
                {VisionContent?.map((elem, index) => {
                    return (
                        <TiltComponent
                            key={`Newjj-${index}`}
                            {...elem}
                            index={index}
                        />
                    )
                })}
            </div>
            </Container>
        </div>
    </>)
}

export default MotionWrapper(Vision, "")
