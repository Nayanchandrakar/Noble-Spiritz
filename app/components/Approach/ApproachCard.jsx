'use client'

const ApproachCard = ({
    children,
    title
}) => {
    return(
        <>
         <div 
           className="
               border-[1px]
               border-gray-400
               flex
               justify-start
               gap-1
               flex-col
               p-4
               rounded-lg
               text-gray-500
               text-sm
               shadow-xl
               shadow-black/[.1]
           ">
              {title && <span
                className="
                text-lg
                text-black
                font-semibold
                ">
                  {title}
               </span>}
               {children}
           </div>
        </>
    )
}

export default ApproachCard