import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router'

export const useAuth=()=>{
    let navigate=useNavigate()
    const {register,handleSubmit,formState:{errors},reset}=useForm()

    const loginSubmit=(data)=>{
        console.log("login data",data);
        reset()
        
    }

    const registerSubmit=(data)=>{
        console.log("register data",data);
        reset()
        
    }




    return {navigate,register,handleSubmit,errors,loginSubmit,registerSubmit}

}