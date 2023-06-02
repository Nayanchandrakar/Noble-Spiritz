'use client'
import {AiOutlineCloseCircle} from 'react-icons/ai'


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

        </div>
    )
}
export default Minimenu