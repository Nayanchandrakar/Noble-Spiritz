'use client'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {toogleLinks} from '../../constants/index.js'
import Link from 'next/link'

const Minimenu = ({
    isOpen,
    handleClick
}) => {
    console.log('rerender from minimenu')
    
    return(
        <div 
            className={`
                bg-white
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
            className="
            sm:hidden
            block
        ">
            <AiOutlineCloseCircle 
               size={30}
               onClick={() => handleClick()}
            />
        </span>
        <div 
        className="
            flex
            justify-center
            items-center
            gap-3
            flex-col
            h-full
            w-full
        ">
            {toogleLinks?.map((elem,index) => {
                return(
                <Link 
                    href={elem?.href}
                    key={`ksdjfas12312df${index}`}
                    className='
                    text-sm
                    text-gray-500
                    '
                >
                    {elem?.field}
                </Link>
                )
            })}
        </div>

        </div>
    )
}
export default Minimenu