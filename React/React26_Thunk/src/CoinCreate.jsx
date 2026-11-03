import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./Slice1";
import CoinCard from "./CoinCard";



const CoinCreate = () => {
    
  const dispatch=useDispatch()
  const {data,loading,error}=useSelector((state)=>state.slice1)
  console.log(data);
  

  useEffect(()=>{
    dispatch(fetchData(20))
  },[])

  if(loading){
    return <h1>Data Is Loading ......</h1>
  }
  if(error){
    return <h1>Error Occurred.</h1>
  }

  return (
    <div className="min-h-screen bg-black p-8">

      <h1 className="text-3xl font-bold text-white mb-8">
        Cryptocurrency Market
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>

    </div>
  );
}

export default CoinCreate;
