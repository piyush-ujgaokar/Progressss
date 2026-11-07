
const Settings = ({data,setData}) => {

    const {preference}=data

    const handleChange=(e)=>{
        setData((prev)=>(
            {
                ...prev,
                preference:e.target.value
            }
        ))
    }
    

  return (
    <div>
      <div>
      
        <label htmlFor="">
              <input type="radio" name="preference" value="dark" checked={preference==="dark"} onChange={handleChange} className="cursor-pointer"   />
             Dark</label>
      </div>
      <div>
       
        <label htmlFor="">
             <input type="radio" name="preference" value="light" checked={preference==="light"} onChange={handleChange} className="cursor-pointer"   />
             Light</label>
      </div>
      </div>
  );
}

export default Settings;
