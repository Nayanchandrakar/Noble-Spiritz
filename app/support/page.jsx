'use client'
import Container from "@app/components/Container"
import Input from "@app/components/inputs/Input"
import Link from "next/link"
import { useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { Postdata } from "@Api/Post"
import { useRouter } from "next/navigation"

const Support = () => {

    const router = useRouter()
    const [isLoading , setisLoading] = useState(false)


    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues:{
          name:'',
          email:'',
          contact:'',
          country:''
        }
      })



      const onSubmit = useCallback(async(data) => {

        // setisLoading to true
        setisLoading(prev => !prev)
    
            if(!data){
              toast.error('please fill fields')
              setisLoading(prev => !prev)
              return;
            }
    
            try {
    
              const formData = {
                name:data?.name,
                email:data?.email,
                contact:data?.contact,
                country:data?.country
              }
             
              console.log(formData)
      
            } catch (error) {
              toast.error(error?.response)
              setisLoading(prev => !prev)
            }
    },[])





    return(
        <Container>
        <section
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-[4rem]
              lg:gap-8
              py-16

            "
        >
            <div className="flex flex-col gap-4">
                <span className="text-green-600  text-[3rem] font-extrabold">
                    Sign the Wall of Support
                </span>

                <p className="
                    text-base
                    text-gray-600
                    font-semibold
                    font-sans
                    p-6
                    bg-slate-100
                    rounded-lg
                ">
                By signing the Wall of Support you can add your voice to support people living with cancer, and those that are supporting or working with them.
                </p>
            </div>

            <div className="">

        <form className="flex flex-col gap-[2.5rem]" onSubmit={handleSubmit(onSubmit)} >

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
              message:'max char length 25'
            },
            minLength:{
              value:3,
              message:'minimum char length 3'
            },
            pattern:{
              value:/^[A-Za-z\s]+$/,
              message:'Full name can only contain letters and spaces'
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
            message:'max char length 40'
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
        type={"number"}
        label="Contact No."
        disabled={isLoading}
        register={register}  
        errors={errors}
        errorName={errors?.mobile}
        validation={{
          required : 'Contact No. is required',
          maxLength:{
            value:10,
            message:'max char length 10'
          },
          minLength:{
            value:10,
            message:'min char length 10'
          },
          pattern:{
            value:/^[6-9]\d{9}$/,
            message:'Enter a valid Indian mobile no.'
          },
      }}
      />


            <Input
                id="country"
                label="Country"
                disabled={isLoading}
                register={register}  
                errors={errors}
                errorName={errors?.country}
                validation={{
                required : 'Country is required',
                }}
            />


          <button
            disabled={isLoading}
            className={`flex w-full cursor-pointer justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 
            transition-all disabled:cursor-not-allowed focus-visible:outline-offset-2 focus-visible:outline-green-600 ${isLoading && 'cursor-not-allowed'}`}
          >
            Donate Now
          </button>

                </form>
            </div>

        </section>
        </Container>
    )
}
export default Support