import React from "react"
import { Slider } from "../../utils/Motion.js"
import { motion } from "framer-motion"

const HeadingShortner = ({ MainHeadline, headline, paragraph }) => {
    return (
        <motion.div variants={Slider()}>
            <div className="flex flex-col gap-3 ">
                {MainHeadline && <span className="uppercase text-gray-500 font-bold text-base">
                    {MainHeadline}
                </span>}
                {headline && 
                <div
                    className="
                     group
                     relative
                     w-fit
                     flex
                     flex-col
                    "
                >
                <span className="text-gray-800 text-3xl font-bold ">
                    {headline}
                </span>
                <span
                    className="
                        absolute
                        w-[30%]
                        group-hover:w-full
                        transition-all
                        h-[5px]
                        rounded-full
                        bg-red-500
                        top-[2.7rem]
                        duration-200
                        ease-in-out
                    "
                />    
                </div>}
                {paragraph && <p className="text-gray-500 text-lg  w-full lg:max-w-[60%] mt-8">
                    {paragraph}
                </p>}
            </div>
        </motion.div>
    )
}

export default HeadingShortner