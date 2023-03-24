import axios from "axios"
import {fetchStart} from "../features/authSlice"
import { useDispatch } from "react-redux"

export const login  = async (userInfo)=>{
     const dispatch = useDispatch()
     const  BASE_URL ="https://12255.fullstack.clarusway.com/redoc/"

     dispatch(fetchStart())
try{
     const {data} = await axios.post(`${BASE_URL}account/auth/login/`,userInfo)  
     console.log(data)
     return data
} catch (error) {
     console.log(error);
}
  
}