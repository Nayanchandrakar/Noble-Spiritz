'use client'
import Image from 'next/image'
import {AiOutlineMenu} from 'react-icons/ai'
import { memo } from 'react'
import { useRouter } from 'next/navigation'

const Logo = ({
handleClick
}) => {

  const router = useRouter()


    return(
    <div 
      className='
        flex
        justify-center
        items-center
        gap-2
    '>
      <span 
       onClick={() => handleClick()}
        className="
          xl:hidden
          block
          hover:bg-gray-200
          transition-all
          duration-400
          rounded-full
          cursor-pointer
          p-2
      ">
        <AiOutlineMenu 
          size={25}
          color='gray'
      />
      </span>
        <Image
          onClick={() => router.push('/')}
          className='
          rounded-full
          cursor-pointer
          '
          alt='Logo_image'
          src="/logo.jpg"
          width={45}
          height={45}
        />
    </div>
    )
}
export default memo(Logo)