
const Profile = ({data,setData,errors}) => {

    const handleChange=(e,item)=>{
        setData((prev)=>({
            ...prev,
            [item]:e.target.value
        }))
    }


  return (
    <div className="flex flex-col gap-3">
      <div>
        <label htmlFor="">Name: </label>
        <input className="border" type="text" placeholder="Enter Name" value={data.name} onChange={(e)=>handleChange(e,"name")}  />
      {errors.name && <p className="text-red-700">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="">Age: </label>
        <input className="border" type="Number" placeholder="Enter Age" value={data.age}  onChange={(e)=>handleChange(e,"age")}  />
        {errors.age && <p className="text-red-700">{errors.age}</p>}
      </div>
      <div>
        <label htmlFor="">Email: </label>
        <input className="border" type="text" placeholder="Enter Email" value={data.email} onChange={(e)=>handleChange(e,"email")}  />
        {errors.email && <p className="text-red-700">{errors.email}</p>}
      </div>
    </div>
  );
}

export default Profile;
