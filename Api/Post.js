import axios from "axios"

const url = process.env.NEXT_PUBLIC_SERVER


export const Postdata = async(
  endpoint,
  data,
  ) => {

    const isData = data ? data : null

  try {
    const apidata = await axios.post(url+endpoint, isData ,{
      withCredentials:true,
    })
    
    return(apidata)

  } catch (error) {
    return(error)
  }
}