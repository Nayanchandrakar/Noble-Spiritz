'use client'
import Image from 'next/image'
import Vision from './components/Vision/Vision'
import PeopleBarrier from './components/Barriers/PeopleBarrier'
import Approach from './components/Approach/Approach'
import Contact from './components/Contact/Contact'

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
              src="/images/hero_banner.webp"
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
        <PeopleBarrier/>
        <Contact/>
      </section>
    )
}
export default Home