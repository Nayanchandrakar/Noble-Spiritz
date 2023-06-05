'use client'

const Container = ({children}) => {
    return(
        <div
            className="
            max-w-[2520px]
            mx-auto
            xl:px-18 
            md:px-10
            sm:px-2
            px-4
            w-full
        ">
            {children}
        </div>
    )
}
export default Container