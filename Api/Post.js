import axios from "axios"

const url = 'http://localhost:3000'


console.log(url)

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