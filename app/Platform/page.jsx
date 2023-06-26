'use client'
import Link from 'next/link'
import Container from '../components/Container'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {motion} from 'framer-motion'
import { fadeIn } from '@utils/Motion'
import Tilt from 'react-parallax-tilt'
import MotionWrapper from '@app/Hoc/MotionWrapper'
import {BsFillStarFill} from 'react-icons/bs'
import Image from 'next/image'
import {PlatformContent} from '@constants/platform.js'

const TiltComponent = ({Heading, SubHeading,Content,index}) => {

    let delay = index * 0.5

    console.log(delay)

    // variants={fadeIn("down", "spring", delay, 0.75)}

    return(
        <>
          <motion.div >
            <Tilt
                perspective={500}
                className="flex justify-center items-center flex-col overflow-hidden parallax-effect  "
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className="w-full
                    rounded-lg
                    flex
                    bg-rose-green
                    flex-col
                    gap-2
                    p-6
                    h-fit
                    "
                >
                    
            <span 
              className='
              text-gray-800
              font-extrabold
              text-left
              flex
              items-center
              flex-row
              gap-2
          '>    
            <span className="w-fit h-fit bg-white rounded-full p-4">
                <BsFillStarFill
                    size={20}
                    color='black'
                />
            </span>

               <span className=''>
                {Heading}
                <p 
                    className="
                    text-sm
                        text-gray-500
                        font-semibold
                        ">
                    {SubHeading}
                </p>
               </span>
          </span>
              



              <div className="overflow-auto h-[15rem] p-2 remove_scrollbar">
                                 
                                 {Content && Content?.map(para =>{
                                     return(
                                    <div 
                                        className="
                                            flex
                                            flex-col
                                            gap-0
                                            py-2
                                        "
                                    >
                                    <span 
                                        className="
                                           text-base
                                           font-bold
                                           text-black

                                       ">
                                           {para?.heading}
                                    </span>
                                    <p className="text-gray-600 text-base">
                                    {para?.para  || null}
                                 </p>
                                 </div>)
                                 })}
                            </div>


          <Link 
          href={'/'}
          className='
              bg-black
              p-2
              text-sm
              flex
              flex-row
              gap-1
              justify-center
              text-white
              text-center
              mt-3
              rounded-lg
              items-center
          '
          >
              Visit site
          <AiOutlineArrowRight
              size={15}
              color='white'
          />
        </Link>

                </div>
            </Tilt>
        </motion.div>
        </>
    )
}


const Platform = () => {



    return(
        <section 
         className="">
            <div 
            className="
                w-full
                h-[30rem]
                relative
                flex
                justify-center
                items-center
            ">
                <div 
                    className="
                    bg-black/[.4]
                    w-full
                    h-full
                    absolute
                "/>
                <span 
                    className='
                     absolute
                     text-[2.3rem]
                     font-bold
                     text-white
                     sm:text-5xl
                     md:text-6xl
                    '
                >
                    DIGITAL PLATFORMS
                </span>
                

            <Image
                width={10}
                height={10}
                sizes='100'
                className='
                    w-full
                    h-full
                    object-cover
                '
                src="/images/digitalplatform.jpg"
                alt='banner_image'
            />
            </div>

        <Container>
            <div 
            className="
            grid 
            grid-cols-1
            sm:grid-cols-2 
            lg:grid-cols-3
            gap-14
            my-16
            ">
                {PlatformContent?.map((elem,index) => {
                    return(
                        <TiltComponent
                            {...elem}
                            key={elem?.id}
                            index={index}
                        />
                    )
                })}
            </div>
        </Container> 
        </section>
    )
}
export default MotionWrapper(Platform)