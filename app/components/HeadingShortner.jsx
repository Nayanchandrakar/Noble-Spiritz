'use client'
import { Slider } from "../../utils/Motion.js"
import { motion } from "framer-motion"

const HeadingShortner = ({ MainHeadline, headline, paragraph , color }) => {
    return (
        <motion.div variants={Slider()}>
            <div className="flex flex-col gap-2 ">
                {MainHeadline && <span className="uppercase text-gray-700 font-bold text-lg">
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
                    className={`
                        absolute
                        w-[30%]
                        group-hover:w-full
                        transition-all
                        h-[5px]
                        rounded-full
                        ${color ? color : 'bg-red-500'}
                        top-[2.7rem]
                        duration-200
                        ease-in-out
                    `}
                />    
                </div>}
                {paragraph && <p className="text-gray-500 text-lg  w-full lg:max-w-[60%] mt-0">
                    {paragraph}
                </p>}
            </div>
        </motion.div>
    )
}

export default HeadingShortner