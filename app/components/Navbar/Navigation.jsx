import {useCallback, useState} from 'react'
import Link from "next/link"

const Navigation = () => {

    const [active , setactive] = useState('/')

    const toogleLinks = [
        {field:'Social-Mission', href:"/"},
        {field:'Digital Platforms', href:"/Platform"},
        {field:'About us', href:"/about"},
        {field:'Ecosystem Partners', href:"/ecosysystem_partners"},
        {field:'Pricing', href:"/pricing"},
        {field:"Founder's Dairy", href:"/founders_dairy"},
        {field:'Careers', href:"/careers"},
        {field:'Contact Us', href:"/contactus"},
    ]


    const handleActiveButton = useCallback((href) => {
        setactive(href)
    },[])

    return(
        <div 
            className="
                flex-row
                gap-2
                items-center
                hidden
                xl:flex
        ">
            {toogleLinks?.map((elem,index) => {
                return(
                    <>
                    <div 
                        onClick={() => handleActiveButton(elem?.href)}
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
                        className={`
                            absolute 
                            w-0
                            duration-500
                            transition-all
                            shadow-black/[.1]
                            group-hover:block
                            ${active == elem?.href ? 'block w-[75%]' : 'group-hover:w-[75%]'}
                            h-[3px] 
                            bg-yellow-700/[.5]
                            rounded-full
                            top-[1.8rem]
                    `} />
                </div>
                </>)
            })}
        </div>
    )
}
export default Navigation