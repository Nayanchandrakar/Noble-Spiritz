"use client"
import { useState } from "react"
import Link from "next/link"
import userAuth from "@hooks/useAuth"
import { Postdata } from "@Api/Post.js"
import { shallow } from "zustand/shallow"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

const IsAuth = () => {
  const [isClicked, setisClicked] = useState(false)

  const router = useRouter()
  const { userCredentials, isNotAuthenticated, Emptyuser, isAuth } = userAuth(
    (state) => ({
      userCredentials: state.userCredentials,
      isNotAuthenticated: state.isNotAuthenticated,
      Emptyuser: state.Emptyuser,
      isAuth: state.isAuth,
    }),
    shallow
  )

  const NotAuthenticated = async () => {
    setisClicked((prev) => !prev)
    try {
      const apicall = await Postdata("/api/auth/logout")

      if (apicall?.status === 201 || 200) {
        toast.success(apicall?.data?.message)
        localStorage.clear()
        isNotAuthenticated()
        Emptyuser()
        setisClicked((prev) => !prev)
        router.push("/")
      } else {
        toast.error("Some Erorr occured")
        setisClicked((prev) => !prev)
      }
    } catch (error) {
      toast.error("Server error")
      console.log(error)
      setisClicked((prev) => !prev)
    }
    setisClicked((prev) => !prev)
  }

  const NotAuthenticatedUser = () => (
    <>
      <Link
        href={"/login"}
        className="
                text-sm
                py-1.5
                px-3
                cursor-pointer
                rounded-lg
                bg-sky-blue
                hover:opacity-90
                text-white
                font-semibold
                transition-all
                duration-300
                "
      >
        Signup / login
      </Link>
    </>
  )

  const Authenticated = () => (
    <>
      <strong
        className="
        text-sm
        py-1.5
        px-2
        cursor-pointer
        rounded-lg
        bg-sky-blue
        hover:opacity-90
        text-white
        transition-all
        duration-300
        font-semibold
            "
      >
        {userCredentials?.data?.username}
      </strong>

      <span
        onClick={NotAuthenticated}
        className={`
        text-sm
        py-1
        px-2
        hover:bg-gray-600
        cursor-pointer
        rounded-full
        bg-gray-400
       text-white
       transition-all
        duration-150
        ${isClicked && "cursor-not-allowed disabled"}
        `}
      >
        Logout
      </span>
    </>
  )

  return (
    <div
      className="
            flex
            flex-row
            gap-3
            justify-center
            items-center
            
        "
    >
      {isAuth && userCredentials?.success ? (
        <Authenticated />
      ) : (
        <NotAuthenticatedUser />
      )}
    </div>
  )
}

export default IsAuth
