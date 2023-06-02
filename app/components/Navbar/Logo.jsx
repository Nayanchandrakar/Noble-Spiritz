import Image from 'next/image'
import {AiOutlineMenu} from 'react-icons/ai'
import { memo } from 'react'

const Logo = ({
handleClick
}) => {

console.log('rerender from navbar logo')


    return(
    <div 
      className='
        flex
        justify-center
        items-center
        gap-2
    '>
      <span 
        className="
          xl:hidden
          block
      ">
        <AiOutlineMenu 
          size={25}
          onClick={() => handleClick()}
      />
      </span>
        <Image
          className='rounded-full'
          alt='Logo_image'
          src="/logo.jpg"
          width={45}
          height={45}
        />
    </div>
    )
}
export default memo(Logo)