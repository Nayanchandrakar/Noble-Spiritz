'use client'
import Select from "@app/components/inputs/Select"
import Input from "@app/components/inputs/Input"
import Link from "next/link"
import axios from 'axios'
import { useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"


const Login = () => {
const [isLoading , setisLoading] = useState(false)

const { register, handleSubmit, formState: { errors } } = useForm({
  defaultValues:{
    email:'',
    password:'',
  }
})



const onSubmit = useCallback(async(data) => {
    // setisLoading to true
    setisLoading(prev => !prev)

    // giving  error message when fields empty

    if(!data){
      toast.error('please fill fields')
      return;
    }

        // post axios request

        const results = await axios.post('http://localhost:3018/api/register',{
          email:data?.email,
          password:data?.password,
      })

      console.log(results)
      
    // setisLoading to false
    setisLoading(prev => !prev)
},[])

  return(
    <div className="grid grid-cols-1  xl:grid-cols-[69%_29%] w-full h-full mb-32 mt-14 gap-4 overflow-x-hidden ">

        {/* blue background */}
        <div className="w-full h-full hidden lg:inline-block  max-w-[2520px] ml-auto bg-blue-500 rounded-r-2xl ">
        </div>


        {/* form field starts from here */}
        <div className="flex  flex-col justify-center px-6 py-12 lg:px-8 border-[2px] border-gray-300 rounded-2xl mx-6 lg:mx-12 xl:mx-0">
          <div className=" flex flex-col justify-center w-full ">


        {/* heading field starts */}
        <div className="mb-8 sm:mb-[8%] md:mb-[12%] flex flex-row justify-center text-center ">
            <h4 className="text-2xl text-semibold  text-black">
            Login or SignIn
            </h4>
        </div>

        {/* form field starts */}
      <form className="space-y-6 " onSubmit={handleSubmit(onSubmit)} >
      
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}  
        errors={errors}
        validation={{
          required : 'Email is required',
          maxLength:{
            value:35,
            message:'max char length 35'
          },
          minLength:{
            value:10,
            message:'min char length 10'
          },
          pattern:{
            value:/^\S+@\S+$/i,
            message:'This is not a valid Email'
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
          required : 'password is required',
          maxLength:{
            value:10,
            message:'max char length 10'
          },
          minLength:{
            value:8,
            message:'min password length 8'
          },
          pattern:{
            value:/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            message:'Please enter a strong password',
          }
      }}
      />


        <div>
          <button
            disabled={isLoading}
            className={`flex w-full cursor-pointer justify-center rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 
            transition-all focus-visible:outline-offset-2 focus-visible:outline-rose-600 ${isLoading && 'cursor-not-allowed'}`}
          >
            Login Now
          </button>
        </div>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Not have an account &nbsp;
        <Link href="/SignUp" className={`font-semibold leading-6 cursor-pointer text-rose-600 hover:text-rose-500 ${isLoading && 'cursor-not-allowed'}`}>
          SignUp Now
        </Link>
      </p>
    </div>
  </div>

    </div>
  )
}

export default Login
