'use client'
import {useCallback, useState} from 'react'
import Image from "next/image"
import Container from "../Container"
import { delay, motion } from "framer-motion"
import { fadeIn } from "../../../utils/Motion.js"
import MotionWrapper from '../../Hoc/MotionWrapper.jsx'

const PeopleBarrier = () => {

  let [isLong , setisLong] = useState('')

    const people = [
        {
          name: 'People with Disability',
          imageUrl:'/Barriers/image1.png',
          role:'Persons with disabilities possess unique abilities and deserve equal opportunities for inclusion and empowerment'
        },
        {
          name: 'War veterans',
          imageUrl:'/Barriers/image2.png',
          role:'War veterans demonstrate remarkable courage and resilience, deserving our utmost respect, support, and gratitude for their service and sacrifice'
        },
        {
          name: 'Underprivileged & Underrepresented ',
          imageUrl:'/Barriers/image3.png',
          role:'We are dedicated to uplifting the underprivileged and underrepresented, ensuring equal opportunities and amplifying their voices for a more inclusive and equitable society '
        },
        {
          name: 'Linguistic Barriers',
          imageUrl:'/Barriers/image4.png',
          role:'We aim to break linguistic barriers by providing accessible educational resources and support to overcome language limitations, fostering inclusive learning for all '
        },
        {
          name: 'Gender inequality',
          imageUrl:'/Barriers/image5.png',
          role:'We strive to combat gender inequality by promoting equal rights, opportunities, and empowerment for all individuals, irrespective of gender, creating a more inclusive and equitable society'
        },
        {
          name: 'Justice involved',
          imageUrl:'/Barriers/image6.png',
          role:'We are commited to supporting and advocating for justice-involved individuals, promoting their reintegration, rehabilitation, and access to education for a second chance and a brighter futur'
        },
        
      ]


      const handleClick = useCallback((name) => {
          setisLong(prev => prev == name ? null : name)
      },[])

    return(
        <Container>
        <div className="bg-white py-[6rem] overflow-x-hidden">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">Our learners</h2>
          <p className="mt-6 text-lg leading-8 text-gray-500">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person,index) => {

            let paragraph;

            isLong == person.name ? (
              paragraph = person.role
            ) : (
              paragraph = person.role.slice(0,112)
            )


            return(
              <motion.li 
              variants={fadeIn("left", "spring", index * 0.5, 0.75)}
              whileHover={{
                scale:1.1,
                transition:{
                  type:'spring',
                  stiffness:100,
            
                }
              }}
              key={person.name}>
                <div
                onClick={() => handleClick(person.name)}
                className="
                  flex 
                  items-center 
                  gap-x-6
                  border
                  border-gray-300
                  p-4
                  rounded-lg
                  cursor-pointer
                ">
                  <Image
                   width={80}
                   height={80}
                   className="
                   rounded-full
                   " 
                   src={person.imageUrl} 
                   alt="image_of_people" 
                   />
  
                  <div >
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-indigo-600">{person.name.length > 25 ? `${person.name.slice(0,25)}...` : person.name}</h3>
                    <p className="
                    text-sm 
                    font-semibold 
                    leading-6 
                    text-gray-600
                    ">
                    {paragraph}
                    <span 
                    className={`
                      text-gray-600
                      cursor-pointer
                    `}>&nbsp;&nbsp;
                    {paragraph.length > 112 ? '...see less' : person.role.length == paragraph.length ? null : '...more'}
                    </span>
                    </p>
                  </div>
                </div>
              </motion.li>  
            )
          })}
        </ul>
      </div>
    </div>
        </Container>
    )
}
export default MotionWrapper(PeopleBarrier)