'use client'
import {useState,useCallback} from 'react'
import  Container  from "../Container"
import Logo from "./Logo"
import Navigation from "./Navigation"
import SocialIcons from "./SocialIcons"
import Minimenu from '../Minimenu'

const Navbar = () => {

// useState hook
const [isOpen , setOpen] = useState(false)

const handleClick = useCallback(() => {
    setOpen(prev => !prev)  
},[])

console.log('rerender from navbar')

    return(
        <header
            className="
                w-full
                border-b-[1px]
                sticky
                inset-0
                shadow-sm
                bg-white
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
                        <SocialIcons/>
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