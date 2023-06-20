'use client'
import {useState,useCallback} from 'react'
import  Container  from "../Container"
import Logo from "./Logo"
import Navigation from "./Navigation"
import SocialIcons from "./SocialIcons"
import Minimenu from '../Minimenu'
import IsAuth from '../IsAuth/IsAuth'


const Navbar = () => {
// useState hook
const [isOpen , setOpen] = useState(false)

const handleClick = useCallback(() => {
    setOpen(prev => !prev)  
},[])


    return(
        <header
            className="
                w-full
                border-b-[1px]
                sticky
                inset-0
                shadow-black/[.1]
                shadow-lg
                z-[3]
                bg-[#f5faff]
            ">
                <Container>
                <nav 
                    className="
                        flex
                        h-[76px]
                        w-full
                        justify-between
                        items-center
                        gap-3
                ">
                        <Logo 
                            handleClick={handleClick}
                        />
                        <Navigation/>

                        <div 
                        className="
                            flex
                            flex-col
                            gap-2
                        ">
                        <IsAuth/>
                        <SocialIcons />
                        </div>

                        <Minimenu 
                           isOpen={isOpen} 
                           handleClick={handleClick} 
                        />
                </nav>
                </Container>
        </header>
    )
}
export default Navbar