import React from "react"
import { Slider } from "../../utils/Motion.js"
import { motion } from "framer-motion"

const HeadingShortner = ({ MainHeadline, headline, paragraph }) => {
    return (
        <motion.div variants={Slider()}>
            <div className="flex flex-col gap-3">
                {MainHeadline && <span className="uppercase text-gray-500 font-bold text-base">
                    {MainHeadline}
                </span>}
                <span className="text-gray-800 text-5xl font-bold">
                    {headline}
                </span>
                {paragraph && <p className="text-gray-500 text-lg  w-full lg:max-w-[60%] mt-8">
                    {paragraph}
                </p>}
            </div>
        </motion.div>
    )
}

export default HeadingShortner