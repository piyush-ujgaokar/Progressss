import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "./components/ProductCard";

const App =() => {

  const [products,setProducts]=useState([])
  const [currentPage, setCurrentPage] = useState(0)

  const fetchApi=async()=>{
    const data=await fetch("https://dummyjson.com/products?limit=194")
    const json=await data.json()
    setProducts(json.products)
    
  }

  useEffect(()=>{
    fetchApi()
  },[])

  const pageSize=10
  const totalProducts=products.length
  const noOfPages=Math.ceil(totalProducts/pageSize)

  const start=currentPage * pageSize
  const end=start+pageSize
  
  console.log(currentPage===noOfPages);
  

const handlePageChange=(n)=>{
  setCurrentPage(n)
}


const handleLeftButton=()=>{
  setCurrentPage((prev)=>prev-1)
}
const handleRightButton=()=>{
  setCurrentPage((prev)=>prev+1)
}


  return !products.length ? <div>No Products</div> : (
    <div>
       <div className="flex justify-center mt-4 gap-2">
      <button disabled={currentPage===0} onClick={()=>handleLeftButton()} className="border p-2 cursor-pointer">◀️</button>
        {[...Array(noOfPages).keys()].map((n)=>{
          return  <span onClick={()=>handlePageChange(n)} className={n===currentPage?"border p-2 bg-green-800 cursor-pointer":"border p-2 cursor-pointer" } key={n}>{n+1}</span>
        
        })}
         <button disabled={currentPage===noOfPages-1} onClick={()=>handleRightButton()} className="border p-2 cursor-pointer">▶️</button>
      </div>
      <div  className="flex gap-20 flex-wrap p-10">
          {
        products.slice(start,end).map((p,index)=>{
          return <div key={index} className="border">
            <ProductCard product={p}/>
          </div>
        })
      }
      </div>
     
    </div>
  );
}

export default App;
