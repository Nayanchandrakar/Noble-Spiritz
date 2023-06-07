'use client'
import Image from "next/image"
import Container from "../Container"
import { motion } from "framer-motion"
import { fadeIn } from "../../../utils/Motion.js"
import MotionWrapper from '../../Hoc/MotionWrapper.jsx'

const PeopleBarrier = () => {

    const people = [
        {
          name: 'person with Disablities',
          imageUrl:'/Barriers/image1.png',
          role:'empty now'
        },
        {
          name: 'War veterans',
          imageUrl:'/Barriers/image2.png',
          role:'empty now'
        },
        {
          name: 'Under privileged',
          imageUrl:'/Barriers/image3.png',
          role:'empty now'
        },
        {
          name: 'Linguistic Barriers',
          imageUrl:'/Barriers/image4.png',
          role:'empty now'
        },
        {
          name: 'Gender inequality',
          imageUrl:'/Barriers/image5.png',
          role:'empty now'
        },
        {
          name: 'Justice involved',
          imageUrl:'/Barriers/image6.png',
          role:'empty now'
        },
        
      ]

    return(
        <Container>
        <div className="bg-white py-24 sm:py-32 overflow-x-hidden">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">People with Barriers PWB`S</h2>
          <p className="mt-6 text-lg leading-8 text-gray-500">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person,index) => (
            <motion.li 
            variants={fadeIn("left", "spring", index * 0.5, 0.75)}
            key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                 width={80}
                 height={80}
                 className="
                 rounded-full
                 " 
                 src={person.imageUrl} 
                 alt="image_of_people" 
                 />

                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
        </Container>
    )
}
export default MotionWrapper(PeopleBarrier)