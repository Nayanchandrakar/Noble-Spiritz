'use client'

const HoverBox = ({
    active,
    href,
}) => {
    return(
        <span 
        className={`
            absolute 
            w-0
            duration-500
            transition-all
            shadow-black/[.1]
            group-hover:block
            ${active == href ? 'block w-[75%]' : 'group-hover:w-[75%]'}
            h-[3px] 
            bg-yellow-700/[.5]
            rounded-full
            top-[1.8rem]
    `} />
    )
}
export default HoverBox