import { useState } from "react";

const Statistics = () => {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("Statistics Component Crashed!");
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <h2 className="font-bold text-lg mb-4">Statistics</h2>

      <div className="flex justify-between">
        <div>
          <h3 className="text-2xl font-bold">120</h3>
          <p className="text-slate-500 text-sm">Projects</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">85%</h3>
          <p className="text-slate-500 text-sm">Success Rate</p>
        </div>
      </div>

      <button
        onClick={() => setCrash(true)}
        className="mt-5 bg-red-500 text-white px-4 py-2 rounded-lg text-sm"
      >
        Crash Statistics
      </button>
    </div>
  );
};


export default Statistics