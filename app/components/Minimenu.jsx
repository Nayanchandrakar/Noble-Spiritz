'use client'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {toogleLinks} from '../../constants/index.js'
import { useCallback , useState} from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link.js'


const Minimenu = ({
    isOpen,
    handleClick
}) => {

    const [IsOpen , setIsOpen] = useState(false)
    const router = useRouter()
    
    const handleRoute = useCallback((href) => {
        router.push(href),
        handleClick()
    },[handleClick,router]) 

    const handleDropMenu = useCallback(() => {
        setIsOpen(prev => !prev)
    },[]) 



    return(
        <div 
            className={`
              bg-[#f8f5fc]
                fixed
                translate
                xl:hidden
                inset-0
                w-[18rem]
                h-full
                p-6
                md:p-4
                transition-all
                duration-900
                ${isOpen ? 'translate-x-0': '-translate-x-96'}
                ${isOpen ? 'opacity-100': 'opacity-20'}
            `}>
        <span 
            onClick={() => handleClick()}
            className="
            cursor-pointer
            p-2
            hover:bg-white
            rounded-full
            w-fit
        ">
            <AiOutlineCloseCircle 
               size={30}
               color='#dfa3ff'
            />
        </span>
        <div 
        className="
            flex
            justify-start
            gap-3
            flex-col
            h-full
            mt-4
            w-full
        ">
            {toogleLinks?.map((elem,index) => {
                return(
                    <>
                    {elem.field == 'About us' ?  
                (<>
                    <div 
                    key={index+1312312}
                    onClick={() => handleDropMenu()}
                    className={`
                    collapse 
                    collapse-arrow
                    bg-[#f0e8fa]
                    hover:bg-[#e6d3fe]
                    transition-all
                    duration-200
                    rounded-lg
                    cursor-pointer
                    ${IsOpen ? 'collapse-open' : 'collapse-close'}
                    `}>
                    <input type="radio" name="my-accordion-1" checked="checked" /> 
                    <div className="collapse-title text-sm
                     text-gray-600">
                        About us
                    </div>
                    <div className="collapse-content text-sm text-gray-600  "> 
                         <Link className='mr-4' href={'/team/board_members'}>Teams</Link>
                        <Link href={'/testimonials'}>Testimonials</Link>
                    </div>
                    </div>
                </>)
                : (<>
                    <span 
                    key={index+34324}
                    className='
                    text-sm
                    text-gray-600
                    bg-[#f0e8fa]
                    hover:bg-[#e6d3fe]
                    transition-all
                    duration-200
                    rounded-lg
                    p-4
                    cursor-pointer
                    '
                    onClick={() => handleRoute(elem?.href)}
                >
                    {elem?.field}
                </span>
                </>)
                
                }
                </>)
            })}
        </div>

        </div>
    )
}
export default Minimenu