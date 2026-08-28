import { useQuery } from "@tanstack/react-query"
import { getAllProductApi, getProductCategoriesApi, getProductsByCategoryApi } from "../api/GetAllProductApi"
import { useEffect, useState } from "react";



export const useGetAllProduct=()=>{


      const [search, setSearch] = useState(null)
      const [debouncSearch, setDebouncSearch] = useState(null)


      useEffect(()=>{
        let timeOut=setTimeout(()=>{
            setDebouncSearch(search)
        },1000)

        return ()=> clearInterval(timeOut)

      },[search])


    
    console.log("Search calling from the filter component");
    

    const {data,isPending,error}=useQuery({
        queryKey: ['products',debouncSearch],
        queryFn: ()=>getAllProductApi(debouncSearch)
    })

     console.log("All Product data",data);



    return {
        data,isPending,error,search,setSearch
    }
    
}

export const useGetProductCategories=()=>{
    const {data,isPending,error}=useQuery({
        queryKey:['categories'],
        queryFn:getProductCategoriesApi
    })

    return {
        data,isPending,error
    }
}

export const useGetProductsByCategory=()=>{

    const [category, setCategory] = useState(null)

    console.log("ye peticular category ka data hai ==>",category);
    

   let {data}= useQuery({
        queryKey:['productByCategory',category],
        queryFn:()=>getProductsByCategoryApi(category)
    })

    return {
        data,setCategory,category
    }
}