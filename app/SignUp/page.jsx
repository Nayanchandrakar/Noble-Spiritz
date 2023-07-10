"use client"
import Select from "@app/components/inputs/Select"
import Input from "@app/components/inputs/Input"
import Link from "next/link"
import { useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { Postdata } from "@Api/Post"
import { useRouter } from "next/navigation"

const Login = () => {
  // router component
  const router = useRouter()

  const [isLoading, setisLoading] = useState(false)

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirm_password: "",
      user: "learner",
    },
  })

  const onSubmit = useCallback(async (data) => {
    // setisLoading to true
    setisLoading((prev) => !prev)

    if (data?.password !== data?.confirm_password) {
      toast.error("password not match")
      setisLoading((prev) => !prev)
      return
    }

    if (!data) {
      toast.error("please fill fields")
      setisLoading((prev) => !prev)
      return
    }

    // post axios request

    try {
      const registerdata = {
        username: data?.name,
        email: data?.email,
        password: data?.password,
        role: data?.user,
        status: "active",
      }

      const apidata = await Postdata("/api/auth/register", registerdata)

      if (apidata?.status === 201 || 200) {
        toast.success("User registered succefully")
        setisLoading((prev) => !prev)
        router.push("/login")
      } else if (apidata?.response?.status === 409) {
        setisLoading(false)
        toast.error(apidata?.response?.data?.message)
      }
    } catch (error) {
      console.log(error)
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
          src="/images/code.png"
          referrerPolicy="no-referrer"
        /> */}
      </div>
      <div className="bg-white flex flex-col justify-center items-center w-[22rem] xs:w-[25rem] lg:w-full h-fit p-8  xl:p-16 rounded-lg lg:rounded-none">
        <span className="text-2xl antialiased font-bold text-[#828899]">
          Create your Acccount!
        </span>
        <p className="text-sm text-center mt-4 text-[#BBC4D8] font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quisquam,
        </p>
        {/* form begins */}

        <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-8 w-full flex flex-col gap-8 h-[12rem] remove_scrollbar overflow-y-auto ">
            <Input
              id="name"
              label="User name"
              disabled={isLoading}
              register={register}
              errors={errors}
              errorName={errors?.name}
              validation={{
                required: "name is required",
                maxLength: {
                  value: 20,
                  message: "max char length 25",
                },
                minLength: {
                  value: 3,
                  message: "minimum char length 3",
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Full name can only contain letters and spaces",
                },
              }}
            />

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
                  message: "max char length 40",
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
              id="mobile"
              type={"number"}
              label="Mobile No."
              disabled={isLoading}
              register={register}
              errors={errors}
              errorName={errors?.mobile}
              validation={{
                required: "Mobile no. is required",
                maxLength: {
                  value: 10,
                  message: "max char length 10",
                },
                minLength: {
                  value: 10,
                  message: "min char length 10",
                },
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Enter a valid Indian mobile no.",
                },
              }}
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
                required: "Password is required",
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

            <Input
              id="confirm_password"
              label="Confirm password"
              type="password"
              disabled={isLoading}
              register={register}
              errors={errors}
              errorName={errors?.confirm_password}
              validation={{
                required: "Password is required",
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

            <Select
              id="user"
              disabled={isLoading}
              errors={errors}
              required
              options={["learner", "trainer"]}
              register={register}
            />

            {/* <Select
        id="subscription"
        disabled={isLoading}
        label="Subscriptions"
        errors={errors}
        required
        options={['CRM','SRM',"Enterpreneur"]}
        register={register}
      /> */}
          </div>

          {/* button sections starts from here */}

          <div className="flex flex-col gap-6 mt-6">
            <button
              disabled={isLoading}
              className={`flex flex-row gap-2 items-center w-full cursor-pointer justify-center rounded-md bg-sky-blue px-3 py-2 text-base antialiased font-semibold uppercase leading-6 text-white shadow-sm hover:opacity-90
              duration-300 focus-visible:outline focus-visible:outline-2 
              transition-all disabled:cursor-not-allowed`}
            >
              {isLoading ? <Loader /> : null}
              Sign Up
            </button>

            <Link
              href="/login"
              className="text-base uppercase font-semibold text-indigo-400 disabled:cursor-not-allowed text-center antialiased"
            >
              login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
