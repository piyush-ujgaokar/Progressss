
const Settings = ({data,setData}) => {

    const {theme}=data

    const handleChange=(e)=>{
        setData((prev)=>({
            ...prev,
            theme:e.target.value

        }))
    }
  return (
    <div>
      <div>
        <input type="radio" onChange={handleChange} value="dark" checked={theme==="dark"} name="theme" />
        <label htmlFor="">Dark</label>
      </div>
      <div>
        <input type="radio" name="theme" value="light" checked={theme==="light"} onChange={handleChange} />
        <label htmlFor="">Light</label>
      </div>
    </div>
  );
}

export default Settings;
