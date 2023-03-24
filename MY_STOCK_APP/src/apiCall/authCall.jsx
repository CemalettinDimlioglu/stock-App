import axios from "axios"

export const login  = async (userInfo)=>{
     const  BASE_URL ="https://12255.fullstack.clarusway.com/redoc/"

try{
     const {data} = await axios.post(`${BASE_URL}account/auth/login/`,userInfo)  
     console.log(data)
     return data
} catch (error) {
     console.log(error);
}
  
}