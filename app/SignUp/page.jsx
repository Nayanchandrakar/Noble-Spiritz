'use client'
import Select from "@app/components/inputs/Select"
import Input from "@app/components/inputs/Input"
import Link from "next/link"
import { useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"


const Login = () => {
const [isLoading , setisLoading] = useState(false)

const { register, handleSubmit, formState: { errors } } = useForm({
  defaultValues:{
    name:'',
    email:'',
    mobile:'',
    password:'',
    confirm_password:'',
    user:'SRM',
    subscription:'CRM',
  }
})

console.log(errors)

const onSubmit = useCallback((data) => {
    // setisLoading to true
    setisLoading(prev => !prev)

    // giving  error message when fields empty
    console.log(data)

    if (data?.password !== data?.confirm_password) {
      toast.error('password not match')
      setisLoading(prev => !prev)
      return;
    }

    if(!data){
      toast.error('please fill fields')
      return;
    }

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
            Regsiter or SignUp
            </h4>
        </div>

        {/* form field starts */}
      <form className="space-y-6 " onSubmit={handleSubmit(onSubmit)} >

      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}  
        errors={errors}
        errorName={errors?.name}
        validation={{
            required : 'name is required',
            maxLength:{
              value:20,
              message:'max char length 20'
            },
            minLength:{
              value:3,
              message:'minimum char length 3'
            },
            pattern:{
              value:/^[a-zA-Z]+$/,
              message:'Enter alphabets only'
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
        id="mobile"
        type={'number'}
        label="Mobile No."
        disabled={isLoading}
        register={register}  
        errors={errors}
        errorName={errors?.mobile}
        validation={{
          required : 'mobile no. is required',
          maxLength:{
            value:10,
            message:'max char length 10'
          },
          minLength:{
            value:10,
            message:'min char length 10'
          },
          pattern:{
            value:/^\+91[7-9]\d{9}$/,
            message:'Enter a valid mobile no. +91'
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

      <Input
        id="confirm_password"
        label="Confirm password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        errorName={errors?.confirm_password}
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

      <Select
        id="user"
        disabled={isLoading}
        errors={errors}
        required
        options={['Learners','Trainers']}
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

        <div>
          <button
            disabled={isLoading}
            className={`flex w-full cursor-pointer justify-center rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 
            transition-all focus-visible:outline-offset-2 focus-visible:outline-rose-600 ${isLoading && 'cursor-not-allowed'}`}
          >
            Register Now
          </button>
        </div>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account &nbsp;
        <Link href="/login" className={`font-semibold leading-6 cursor-pointer text-rose-600 hover:text-rose-500 ${isLoading && 'cursor-not-allowed'}`}>
          Login Now
        </Link>
      </p>
    </div>
  </div>

    </div>
  )
}

export default Login
