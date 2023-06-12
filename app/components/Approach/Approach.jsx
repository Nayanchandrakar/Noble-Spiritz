'use client'
import Image from "next/image"
import Container from "../Container"
import HeadingShortner from "../HeadingShortner"
import {motion} from 'framer-motion'
import ApproachCard from "./ApproachCard"

const Approach = () => {
    return(
        <motion.section
            className="
            my-[6rem]
             overflow-x-hidden
        ">
        <Container>
        <HeadingShortner
            headline={'Our approach.'}
        />


        <div 
            className="
              mt-12
            ">
        <HeadingShortner
            MainHeadline={'Learner'}
            paragraph={'You can learn anything. Propel your career and enrich your lives.'}
        />
        <div 
        className="
         grid
         mt-6
         grid-cols-1
         sm:grid-cols-2
         lg:grid-cols-3
         gap-3
        ">
           <ApproachCard>
           <li>Nurture Innovation</li>
            <li>Mentorship and Guidance</li>
           </ApproachCard>
           
           <ApproachCard>
           <li>Resource Provision</li>
            <li>Skill Development</li>
           </ApproachCard>

           <ApproachCard>
           <li> Network Expansion</li>
           </ApproachCard>
        </div>
        </div>


        <div 
            className="
              mt-12
            ">
        <HeadingShortner
            MainHeadline={'INSTRUCTOR'}
            paragraph={'We empower teachers to support their careers and what they love. '}
        />
        <div 
        className="
         grid
         mt-6
         grid-cols-1
         sm:grid-cols-2
         lg:grid-cols-3
         gap-3
        ">
           <ApproachCard>
           <li>Sell Materials/Schedule Paid Training</li>
            <li> Platform Fundraises</li>
           </ApproachCard>
           
           <ApproachCard>
           <li>Schedule Free Training </li>
            <li>Platform Pays for Materials/Classes</li>
           </ApproachCard>
        </div>
        </div>
        </Container>
        </motion.section>
    )
}
export default Approach