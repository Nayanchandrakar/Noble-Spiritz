'use client'
import { motion } from "framer-motion"
import { ContainerDelay } from "../../utils/Motion.js"

const MotionWrapper = (Component) =>
    function HOC() {
        return (
            <motion.section
                variants={ContainerDelay()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
               
                <Component />
            </motion.section>
        )
    }
export default MotionWrapper