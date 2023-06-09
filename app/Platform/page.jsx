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

const TiltComponent = ({index,heading,paragraph,href}) => {
    return(
        <>
          <motion.div variants={fadeIn("down", "spring", index * 0.5, 0.75)}>
            <Tilt
                key={`mainkey234${index}`}
                perspective={500}
                className="flex justify-center items-center  flex-col overflow-hidden parallax-effect  "
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className="w-full
                    rounded-lg
                    h-fit
                    flex
                    bg-rose-green
                    flex-col
                    gap-2
                    p-6"
                >
                    
            <span 
              className='
              text-gray-800
              font-bold
              text-left
              flex
              flex-row
              gap-2
          '>    
            <BsFillStarFill
                size={20}
                color='black'
            />
               {heading}
          </span>
              <p 
              className="
                  text-sm
                  text-gray-600
                  text-left
              ">
                  {paragraph}
              </p>
          <Link 
          href={href}
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

    const platformContent = [
        { heading:'Disney + clone' , paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nihil totam deleniti quod, atque vel labore accusantium voluptatem, molestias quae odit repellendus impedit.' , href:'/' },
        { heading:'Hotstar' , paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nihil totam deleniti quod, atque vel labore accusantium voluptatem, molestias quae odit repellendus impedit.' , href:'/' },
        { heading:'Netflix' , paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nihil totam deleniti quod, atque vel labore accusantium voluptatem, molestias quae odit repellendus impedit.' , href:'/' },
        { heading:'Disney + clone' , paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nihil totam deleniti quod, atque vel labore accusantium voluptatem, molestias quae odit repellendus impedit.' , href:'/' },
        { heading:'Hotstar' , paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nihil totam deleniti quod, atque vel labore accusantium voluptatem, molestias quae odit repellendus impedit.' , href:'/' },
        { heading:'Netflix' , paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nihil totam deleniti quod, atque vel labore accusantium voluptatem, molestias quae odit repellendus impedit.' , href:'/' },
    ]

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
                {platformContent?.map((elem,index) => {
                    return(
                        <TiltComponent
                            {...elem}
                            key={`temp${index}`}
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