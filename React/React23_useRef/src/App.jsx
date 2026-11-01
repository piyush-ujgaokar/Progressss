import { useRef } from "react";
import { useState } from "react";


//let money=0

const App = () => {
  const [count, setCount] = useState(0);
  let money=useRef(0) //--->and we can create it globally as well and it even works like useRef because it has now reference

  console.log("Function re-render......");

  return (
    <div className="p-10 gap-10">
      <h1 className="text-10xl">Counter App</h1>
      <div>
        <h2>Count is:-{count}</h2>
        <button
          className="text-xl bg-black text-white mr-5 cursor-pointer"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      
      </div>
      <div>
        <h1 className="text-10xl">Money is:{money.current}</h1>
              <button
          className="text-xl bg-black text-white cursor-pointer"
          onClick={() => {
              money.current=money.current+1
              console.log(money);
              
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default App;
