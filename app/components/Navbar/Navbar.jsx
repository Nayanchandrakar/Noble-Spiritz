'use client'
import  Container  from "../Container"
import Logo from "./Logo"
import Navigation from "./Navigation"
import SocialIcons from "./SocialIcons"

const Navbar = () => {
    return(
        <header 
            className="
                w-full
                border-b-[1px]
                sticky
                inset-0
                shadow-sm
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
                        <Logo/>
                        <Navigation/>
                        <SocialIcons/>
                </nav>
                </Container>
        </header>
    )
}
export default Navbar