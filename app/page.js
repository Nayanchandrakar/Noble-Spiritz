'use client'
import Image from 'next/image'

const Home = () => {
    return(
      <section>
        <div
          className='
            w-full
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
      </section>
    )
}
export default Home