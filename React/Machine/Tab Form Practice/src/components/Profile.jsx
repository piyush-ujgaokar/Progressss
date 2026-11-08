
const Profile = ({data,setData,errors,setError}) => {

    console.log(errors);
    

    const {name,age,email}=data

    const handleChange=(e,item)=>{
        setData((prev)=>({
            ...prev,
            [item]:e.target.value
        }))

        setError((prev)=>({
            ...prev,
            [item]:""
        }))
       
    }
  return (
    <div>
       <div>
      <div className="p-2">
        <label htmlFor="">Name: </label>
        <input onChange={(e)=>handleChange(e,"name")} value={name} className="border" type="text" placeholder="Enter Your name"  />
        {errors.name && <p className="text-red-700">{errors.name}</p>}
      </div>
      <div className="p-2">
        <label htmlFor="">Age: </label>
        <input onChange={(e)=>handleChange(e,"age")} className="border" value={age} type="number" placeholder="Enter Your Age"  />
        {errors.age && <p className="text-red-700">{errors.age}</p>}
      </div>
      <div className="p-2">
        <label htmlFor="">Email: </label>
        <input onChange={(e)=>handleChange(e,"email")} className="border" value={email} type="text" placeholder="Enter Your Email"  />
        {errors.email && <p className="text-red-700">{errors.email}</p>}
      </div>
    </div>
    </div>
  );
}

export default Profile;
