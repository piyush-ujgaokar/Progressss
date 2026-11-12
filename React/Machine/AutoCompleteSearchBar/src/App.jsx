import { useEffect, useRef, useState } from "react";

const App = () => {

  const [result, setResult] = useState([])
  const [input, setInput] = useState("")
  const [showResult,setShowResult]=useState(false)
  const inputRef=useRef(null)

  const fetchData=async()=>{
    const result=await fetch("https://dummyjson.com/recipes/search?q="+input)
    const data=await result.json()
    setResult(data.recipes)
    
  }
  useEffect(()=>{
    const apicall=setTimeout(()=>{
        if(inputRef.current !== null){
          fetchData()
        }
    },500)

    return ()=>clearTimeout(apicall)
  },[input])


  return (
    <div className="p-10">
      <div className="w-full">
        <input type="text" ref={inputRef} onFocus={()=> setShowResult(true)} onBlur={()=>setShowResult(false)} onChange={(e)=>setInput(e.target.value)} value={input} placeholder="Search Food" className="border p-2 w-[50%] flex justify-center item-center" />
      </div>
    { showResult && <div className="w-full ">
        <div className="w-[50%] p-2 border max-h-[50vh] overflow-y-auto">
          {result.map((r)=><span key={r.id} className="block p-1 hover:bg-gray-200 cursor-pointer">{r.name}</span>)}
        </div>
      </div>
    }

    </div>
  );
}

export default App;
