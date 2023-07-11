"use client"
import { useState, useCallback } from "react"
import Container from "../Container"
import Logo from "./Logo"
import Navigation from "./Navigation"
import SocialIcons from "./SocialIcons"
import Minimenu from "../Minimenu"
import IsAuth from "../../components/IsAuth/IsAuth"

const Navbar = () => {
  // useState hook
  const [isOpen, setOpen] = useState(false)

  const handleClick = useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  return (
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
            "
    >
      <Container>
        <nav
          className="
                        flex
                        h-[76px]
                        w-full
                        justify-between
                        items-center
                        gap-3
                "
        >
          <Logo handleClick={handleClick} />
          <Navigation />

          <div
            className="
                            flex
                            flex-row
                            items-center
                            lg:gap-4
                            gap-2
                        "
          >
            <SocialIcons />
            <span className="xl:inline-block hidden">
              <IsAuth />
            </span>
          </div>

          <Minimenu isOpen={isOpen} handleClick={handleClick} />
        </nav>
      </Container>
    </header>
  )
}
export default Navbar
