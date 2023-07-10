"use client"
import Input from "@app/components/inputs/Input"
import Link from "next/link"
import { useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { Postdata } from "@Api/Post"
import { useRouter } from "next/navigation"
import userAuth from "@hooks/useAuth"
import { shallow } from "zustand/shallow"
import Loader from "@app/components/Loader"
import Image from "next/image"

const Login = () => {
  const router = useRouter()

  const { setisAuth } = userAuth(
    (state) => ({
      setisAuth: state.setisAuth,
    }),
    shallow
  )

  const [isLoading, setisLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const Authenticated = (data) => {
    setisAuth()
    // can be commented in future
    localStorage.setItem("token", JSON.stringify(data?.token))
  }

  const onSubmit = useCallback(async (data) => {
    // setisLoading to true
    setisLoading((prev) => !prev)

    if (!data) {
      toast.error("please fill fields")
      setisLoading((prev) => !prev)
      return
    }

    try {
      const apiLoggedData = {
        email: data?.email,
        password: data?.password,
      }
      //before pull checkout
      const loggedInData = await Postdata("/api/auth/login", apiLoggedData)

      if (loggedInData?.status === 201 || 200) {
        toast.success("Logged In succefully")
        Authenticated(loggedInData?.data)
        setisLoading((prev) => !prev)
        router.push("/")
      } else if (loggedInData?.response?.status === 401) {
        setisLoading(false)
        toast.error(loggedInData?.response?.data?.message)
      }
    } catch (error) {
      toast.error(error?.response)
      setisLoading((prev) => !prev)
    }
  }, [])

  return (
    <div className="bg-sky-blue flex grid-cols-1  lg:grid-cols-[65%_35%] w-full h-[50rem] max-w-[2520px] mx-auto overflow-hidden justify-center items-center lg:grid lg:justify-normal lg:items-center lg:h-fit ">
      <div className="w-full h-full hidden lg:inline-block">
        {/* <Image
          width={10}
          height={10}
          sizes="100"
          className="w-full h-full"
          src="/images/login.png"
          referrerPolicy="no-referrer"
        /> */}
      </div>

      <div className="bg-white flex flex-col justify-center items-center w-[22rem] xs:w-[25rem] lg:w-full h-fit p-8  xl:p-16 rounded-lg lg:rounded-none">
        <span className="text-2xl antialiased font-bold text-[#828899]">
          Welcome Back!
        </span>
        <p className="text-sm text-center mt-4 text-[#BBC4D8] font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quisquam,
        </p>
        {/* form begins */}

        <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-8 w-full flex flex-col gap-8">
            {/* first input div */}
            <Input
              id="email"
              label="Email"
              disabled={isLoading}
              register={register}
              errors={errors}
              validation={{
                required: "Email is required",
                maxLength: {
                  value: 35,
                  message: "max char length 35",
                },
                minLength: {
                  value: 10,
                  message: "min char length 10",
                },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "This is not a valid Email",
                },
              }}
              errorName={errors?.email}
            />

            <Input
              id="password"
              label="Password"
              type="password"
              disabled={isLoading}
              register={register}
              errors={errors}
              errorName={errors?.password}
              validation={{
                required: "password is required",
                maxLength: {
                  value: 10,
                  message: "max char length 10",
                },
                minLength: {
                  value: 8,
                  message: "min password length 8",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                  message: "Password Should contain special symbols",
                },
              }}
            />
          </div>

          {/* button sections starts from here */}

          <div className="flex flex-col gap-6 mt-6">
            <span className="text-indigo-600 text-base font-semibold antialiased text-right ">
              Forot Password?
            </span>

            <button
              disabled={isLoading}
              className={`flex flex-row gap-2 items-center w-full cursor-pointer justify-center rounded-md bg-sky-blue px-3 py-2 text-base antialiased font-semibold uppercase leading-6 text-white shadow-sm hover:opacity-90
              duration-300 focus-visible:outline focus-visible:outline-2 
              transition-all disabled:cursor-not-allowed`}
            >
              {isLoading ? <Loader /> : null}
              Login
            </button>

            <Link
              href="/signup"
              className="text-base uppercase font-semibold text-indigo-400 disabled:cursor-not-allowed text-center antialiased"
            >
              Sign UP
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
