'use client'
import Image from 'next/image'
import Vision from './components/Vision/Vision'
import PeopleBarrier from './components/Barriers/PeopleBarrier'
import Approach from './components/Approach/Approach'
import Contact from './components/Contact/Contact'
import BlogSwiper from './components/blog/BlogSwiper'
import { useRouter } from 'next/navigation'
import Container from './components/Container'

const Home = () => {

const router = useRouter()


    return(
      <section>
        <div
          className='
            w-full
            h-full
            relative
            flex
            justify-start
          '
        >
            <Image
              src="/images/banner.png"
              className='
                w-full
                object-cover
                h-[36rem]
              '
              sizes='100%'
              width={100}
              height={100}
              alt='hero-image'
          />

          <div
            className='
              w-full
              h-full
              absolute
              bg-black/[.6]
              inset-0
            '  
          />

        <div    
          className='
            flex
            absolute
            top-0
            p-2
            md:p-6
            xl:p-8
            justify-start
            items-center
            w-full
            h-full
          '
        >
         <Container>
         <div
            className='
              flex
              flex-col
              gap-4
            '
          >
          <h2
              className='
              xl:text-[4rem]
              text-[2.8rem]
              sm:text-[3rem]
              md:text-[3.5rem]
              leading-[4rem]
              font-bold
              text-white
              '
          >
            A Social Mission committed to <br/> community 
          </h2>
            <p
              className='
                w-[80%]
                text-lg
                text-white
              '
            >A Social mission committed to 100% Free Job Skills Training from expert instructors <br className='xl:block hidden'/> along with 100% Free Material. 501 (c) (3) non-profit/charity
            </p>
            <div
              className='
                flex
                flex-row
                gap-4
                mt-3
              '
            >
              <button 
              onClick={() => router.push('/trainings')}
              className="
                  px-5
                  py-2
                  text-white
                  bg-rose-600
                  text-center
                  rounded-lg
                  hover:bg-rose-700
                  transition-all
                  duration-300
              ">Learn</button>

              <button 
              onClick={() => router.push('/training')}
              className="
                  px-5
                  py-2
                  text-white
                  bg-indigo-600
                  text-center
                  rounded-lg
                  hover:bg-indigo-700
                  transition-all
                  duration-300
              ">Train</button>
            </div>
          </div>
         </Container>
        </div>
        </div>

        <Vision/>
        <Approach/>
        <PeopleBarrier/>
        <BlogSwiper/>
        <Contact/>
      </section>
    )
}
export default Home