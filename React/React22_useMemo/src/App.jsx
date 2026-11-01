import { useCallback, useMemo, useState } from "react";

// const fibonacci = (n) => {
//   if (n <= 1) return n;

//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

const App = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(null);
  // const [result, setResult] = useState(null)

  
const fibonacci =useCallback((n) => {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
},[])

 const result=useMemo(()=>fibonacci(number),[number])

 

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
        <button
          className="text-xl bg-black text-white cursor-pointer"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
      <div>
        <h1 className="text-10xl">Fibonacci number is:-{result}</h1>
        <input
          className="border focus:border text-black"
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
    </div>
  );
};

export default App;
