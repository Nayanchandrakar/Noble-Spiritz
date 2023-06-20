import axios from "axios"

const url = process.env.NEXT_PUBLIC_SERVER


export const GetData = async(
  endpoint,
  token,
  ) => {

    let headers = {
        Authorization: `Bearer ${token}`
    };


  try {
    const apidata = await axios.get(url+endpoint, {headers})
    
    return(apidata)

  } catch (error) {
    return(error)
  }
}