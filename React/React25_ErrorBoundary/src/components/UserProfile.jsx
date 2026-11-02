import { useState } from "react";

const UserProfile = () => {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("User Profile Component Crashed!");
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <h2 className="font-bold text-lg mb-3">User Profile</h2>
      <p className="text-slate-600">Name: Piyush</p>
      <p className="text-slate-600">Role: MERN Developer</p>

      <button
        onClick={() => setCrash(true)}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg text-sm"
      >
        Crash Profile
      </button>
    </div>
  );
};

export default UserProfile