import {useCallback, useState} from 'react'
import Link from "next/link"
import {toogleLinks} from '../../../constants/index.js'

const Navigation = () => {

    const [active , setactive] = useState('/')


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




                    {elem.field == 'About us' ? (
                        <>
                        <div className="dropdown dropdown-hover text-xs">
                        <label tabIndex={0} >About us</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                          <li><Link href={'/team/core_team'}>Team</Link></li>
                          <li><Link href={'/testimonials'}>Testimonials</Link></li>
                        </ul>
                        </div>
                        </>
                    ) : (
                        <>
                        <Link
                        className="
                            text-xs
                            font-medium
                        "
                        href={elem?.href}
                    >
                        {elem?.field}
                    </Link>
                        </>
                    )}
                    
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
export  default Navigation