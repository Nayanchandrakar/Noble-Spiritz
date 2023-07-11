"use client"
import { useCallback, useState } from "react"
import { toogleLinks } from "../../../constants/index.js"

import Navcontainer from "./Navcontainer.jsx"
import IsAuth from "../IsAuth/IsAuth.jsx"

const Navigation = () => {
  const [active, setactive] = useState("/")

  const handleActiveButton = useCallback((href) => {
    setactive(href)
  }, [])

  return (
    <div
      className="
                flex-row
                gap-2
                items-center
                hidden
                xl:flex
        "
    >
      {toogleLinks?.map((elem) => {
        return (
          <Navcontainer
            handleActiveButton={handleActiveButton}
            elem={elem}
            acitve={active}
          />
        )
      })}

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
    </div>
  )
}
export default Navigation
