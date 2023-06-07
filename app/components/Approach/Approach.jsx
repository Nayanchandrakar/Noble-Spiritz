import Image from "next/image"
import Container from "../Container"
import HeadingShortner from "../HeadingShortner"
import {motion} from 'framer-motion'

const Approach = () => {
    return(
        <motion.section
            className="
             my-12
             overflow-x-hidden
        ">
        <Container>
        <HeadingShortner
            headline={'Our approach.'}
        />
        <div 
        
        className="
         grid
         mt-12
         grid-cols-1
         sm:grid-cols-2
         lg:grid-cols-3
         gap-3
        ">
            <div 
           
            className="
                border-[1px]
                border-gray-400
                flex
                justify-start
                gap-1
                flex-col
                p-4
                rounded-lg
                text-gray-500
                text-sm
                shadow-xl
                shadow-black/[.1]
            ">
                <span
                 className="
                 text-lg
                 text-black
                 font-semibold
                 ">
                    Incutable
                </span>
                <li>Life-skill Enablement</li>
                <li>Enable to Create Business Portfolios</li>
            </div>

            <div 
            className="
                border-[1px]
                border-gray-400
                flex
                justify-start
                gap-1
                flex-col
                p-4
                rounded-lg
                text-gray-500
                text-sm
                shadow-xl
                shadow-black/[.1]
            ">
                <span
                 className="
                 text-lg
                 text-black
                 font-semibold
                 ">
                    Accelerate
                </span>
                <li>Connect Social Investors</li>
                <li>Enhance Customer Portfolios</li>
                <li>Stabilize Operations</li>
            </div>

            <div 
            className="
                border-[1px]
                border-gray-400
                flex
                justify-start
                gap-1
                flex-col
                p-4
                rounded-lg
                text-gray-500
                text-sm
                shadow-xl
                shadow-black/[.1]
            ">
                <span
                 className="
                 text-lg
                 text-black
                 font-semibold
                 ">
                   Own &Operate
                </span>
                <li>Transition to PWB Owners to Operate Independently</li>
                <li>Host & Support Digitally- Franchised Portfolios</li>
            </div>
        </div>
        </Container>
        </motion.section>
    )
}
export default Approach