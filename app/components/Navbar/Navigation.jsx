import Link from "next/link"

const Navigation = () => {
    const toogleLinks = [
        {field:'Social-Mission', href:"/"},
        {field:'Digital Platforms', href:"/"},
        {field:'About us', href:"/"},
        {field:'Ecosystem Partners', href:"/"},
        {field:'Pricing', href:"/"},
        {field:"Founder's Dairy", href:"/"},
        {field:'Careers', href:"/"},
        {field:'Contact Us', href:"/"},
    ]

    return(
        <div 
            className="
                flex
                flex-row
                gap-2
                items-center
        ">
            {toogleLinks?.map((elem,index) => {
                return(
                    <>
                    <div 
                        className="
                            relative
                            p-3
                            rounded-lg
                            flex
                            justify-center
                            items-center
                            hover:shadow-5xl
                            transition-all
                            duration-400
                            group
                        "
                    >
                    <Link
                        className="
                            text-xs
                            font-medium
                        "
                        href={elem?.href}
                    >
                        {elem?.field}
                    </Link>
                    <span 
                        className="
                            absolute 
                            w-0
                            duration-500
                            transition-all
                            group-hover:block
                            shadow-black/[.1]
                            group-hover:w-[75%]
                            h-[3px] 
                            bg-yellow-700/[.5]
                            rounded-full
                            top-[1.8rem]
                    " />
                </div>
                </>)
            })}
        </div>
    )
}
export default Navigation