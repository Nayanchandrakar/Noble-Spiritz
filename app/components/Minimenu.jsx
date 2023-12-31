"use client"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { toogleLinks } from "../../constants/index.js"
import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link.js"
import IsAuth from "./IsAuth/IsAuth.jsx"

const Minimenu = ({ isOpen, handleClick }) => {
  const [IsOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleRoute = useCallback(
    (href) => {
      router.push(href), handleClick()
    },
    [handleClick, router]
  )

  const handleDropMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <div
      className={`
              bg-[#f8f5fc]
                fixed
                translate
                xl:hidden
                inset-0
                w-[18rem]
                h-full
                p-6
                md:p-4
                transition-all
                duration-900
                ${isOpen ? "translate-x-0" : "-translate-x-96"}
                ${isOpen ? "opacity-100" : "opacity-20"}
            `}
    >
      <span
        onClick={() => handleClick()}
        className="
            cursor-pointer
            p-2
        "
      >
        <AiOutlineCloseCircle size={30} color="#dfa3ff" />
      </span>
      <div
        className="
            flex
            justify-start
            gap-3
            flex-col
            h-full
            mt-4
            w-full
        "
      >
        {toogleLinks?.map((elem, index) => {
          return (
            <>
              {elem.field == "About us" ? (
                <>
                  <div
                    key={index + 1312312}
                    onClick={() => handleDropMenu()}
                    className={`
                    collapse 
                    collapse-arrow
                    bg-[#f0e8fa]
                    hover:bg-[#e6d3fe]
                    transition-all
                    duration-200
                    rounded-lg
                    cursor-pointer
                    ${IsOpen ? "collapse-open" : "collapse-close"}
                    `}
                  >
                    <input
                      type="radio"
                      name="my-accordion-1"
                      checked="checked"
                    />
                    <div
                      className="collapse-title text-sm
                     text-gray-600"
                    >
                      About us
                    </div>
                    <div className="collapse-content text-sm text-gray-600  ">
                      <Link className="mr-4" href={"/team/board_members"}>
                        Teams
                      </Link>
                      <Link href={"/testimonials"}>Testimonials</Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <span
                    key={index + 34324}
                    className="
                    text-sm
                    text-gray-600
                    bg-[#f0e8fa]
                    hover:bg-[#e6d3fe]
                    transition-all
                    duration-200
                    rounded-lg
                    p-4
                    cursor-pointer
                    "
                    onClick={() => handleRoute(elem?.href)}
                  >
                    {elem?.field}
                  </span>
                </>
              )}
            </>
          )
        })}
        <div
          className="
                py-3
                flex
                flex-row
                gap-2
                justify-center
            "
        >
          <button
            className="
                    w-fit 
                    h-fit
                    px-3
                    py-1.5
                    rounded-lg 
                    text-white
                    bg-green-500
                    font-bold
                    text-center
                    text-sm
                    hover:bg-green-600
                    transition-all
                    duration-400
                "
          >
            Donate
          </button>

          <IsAuth />
        </div>
      </div>
    </div>
  )
}
export default Minimenu
