'use client'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {toogleLinks} from '../../constants/index.js'
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'


const Minimenu = ({
    isOpen,
    handleClick
}) => {

    const router = useRouter()
    
    const handleRoute = useCallback((href) => {
        router.push(href),
        handleClick()
    },[handleClick,router]) 


    return(
        <div 
            className={`
              bg-[#f8f5fc]
                fixed
                translate
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
            sm:hidden
            block
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
                <span 
                    key={`ksdjfas12312df${index}`}
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
                )
            })}
        </div>

        </div>
    )
}
export default Minimenu