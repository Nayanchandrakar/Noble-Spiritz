import { motion } from "framer-motion"
import { ContainerDelay } from "../../utils/Motion.js"

const MotionWrapper = (Component, idnavigate) =>
    function HOC() {
        return (
            <motion.section
                variants={ContainerDelay()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <span  
                id={idnavigate}
                >
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        )
    }
export default MotionWrapper