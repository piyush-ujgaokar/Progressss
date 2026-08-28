import axios from "axios";
import { axiosInstance } from "../../../config/axiosInstance";

export const getAllProductApi = async (search) => {


    let url=search ? `/products/search?q=${search}` : '/products'

  try {
    let res = await axiosInstance.get(url);
    return res.data;
  } catch (error) {
    console.log("error in product Api", error);
  }
};

export const getProductCategoriesApi = async () => {
  try {
    let res = await axiosInstance.get("/products/categories");
    return res.data;
  } catch (error) {
    console.log("error in Categories Api", error);
  }
};


export const getProductsByCategoryApi=async(category)=>{
  try {
      let res=await axiosInstance.get(`/products/category/${category}`)
      return res.data;
      
  } catch (error) {
    console.log(error);
    
  }
}