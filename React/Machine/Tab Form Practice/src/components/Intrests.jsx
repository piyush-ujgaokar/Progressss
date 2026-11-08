
const Intrests = ({data,setData,errors}) => {

    console.log("data inside Intrests",data);
    const {intrests}=data
    console.log("intrest error:",errors.intrestsErr);
    
    const handleChange=(e)=>{
        setData((prev)=>({
            ...prev,
            intrests:e.target.checked ? [...prev.intrests,e.target.name] : prev.intrests.filter((i)=>i!==e.target.name)
        }))
    }

  return (
    <div>
      <div>
        <input type="checkbox" name="coding" onChange={handleChange} checked={intrests.includes("coding")}  />
        <label htmlFor=""> Coding</label>
      </div>
      <div>
        <input type="checkbox" name="travelling" onChange={handleChange} checked={intrests.includes("travelling")} />
        <label htmlFor=""> Travelling</label>
      </div>
      <div>
        <input type="checkbox" name="dancing" onChange={handleChange} checked={intrests.includes("dancing")} />
        <label htmlFor=""> Dancing</label>
      </div>
      <div>
        <input type="checkbox" name="fighting" onChange={handleChange} checked={intrests.includes("fighting")} />
        <label htmlFor=""> Fighting</label>
      </div>
      {errors.intrestsErr && <p className="text-red-700">{errors.intrestsErr}</p>}
    </div>
  );
}

export default Intrests;
