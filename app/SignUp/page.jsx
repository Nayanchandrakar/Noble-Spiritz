'use client'
import Link from "next/link"
import Image from 'next/image'
import { useState } from "react"
import HeadingShortner from "@app/components/HeadingShortner"


const SignUp = () => {
const [disable , setdisable] = useState(false)


  return(
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full  sm:max-w-sm flex justify-center">
     <HeadingShortner
        headline={'Login to your account'}
     />
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Enter Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              disabled={disable}
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              disabled={disable}
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Mobile Number
          </label>
          <div className="mt-2">
            <input
              id="number"
              name="Mobile Number"
              type="number"
              autoComplete="number"
              required
              disabled={disable}
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              disabled={disable}
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Confirm Password
            </label>
          
          </div>
          <div className="mt-2">
            <input
              id="confirm_password"
              name="confirm_password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
            />
          </div>
        </div>


        <select className="select focus:border-none select-sm select-bordered w-full ">
            <option selected>SRM</option>
            <option>Han Solo</option>
            <option>Greedo</option>
        </select>

        <div className="">
        <strong className="text-sm pt-4 text-gray-500 font-medium">Subscription</strong>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">CRM</span> 
            <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">SRM</span> 
            <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Enterpreneur</span> 
            <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
          </label>
        </div>
          
        </div>


        <div>
          <button
            type="submit"
            disabled={disable}
            className="flex w-full justify-center rounded-md bg-rose-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            Register Now
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Already have an account &nbsp;
        <Link href="/login" className="font-semibold leading-6 text-rose-600 hover:text-rose-500">
          Login Now
        </Link>
      </p>
    </div>
  </div>
  )
}

export default SignUp