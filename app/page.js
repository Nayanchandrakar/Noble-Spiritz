'use client'
import Image from 'next/image'
import Vision from './components/Vision/Vision'
import PeopleBarrier from './components/Barriers/PeopleBarrier'
import Approach from './components/Approach/Approach'
import Contact from './components/Contact/Contact'
import BlogSwiper from './components/blog/BlogSwiper'

const Home = () => {
    return(
      <section>
        <div
          className='
            w-full
            h-full
          '
        >
            <Image
              src="/images/banner.jpeg"
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
     
        </div>

        <Vision/>
        <Approach/>
        <BlogSwiper/>
        <PeopleBarrier/>
        <Contact/>
      </section>
    )
}
export default Home