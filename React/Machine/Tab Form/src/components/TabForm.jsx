import { useState } from "react";
import Intrests from "./Intrests";
import Profile from "./Profile";
import Settings from "./Settings";

const TabForm = () => {

    const [data, setData] = useState({
        name:"Piyush",
        email:"piyushuj@gmail.com",
        age:20,
        intrests:["coding","music","dancing"],
        preference:"dark"
    })

    const [errors, setErrors] = useState({})

    console.log("errors",errors);
    

    console.log("data from tabForm:",data);
    


  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate:()=>{    
        const err={}

            if(!data.name || data.name.length <3){
                err.name="Name Is Required and Should be greater that 3 character"
            }
            if(!data.age || data.age <18){
                err.age="Age Should be greater than 18"
            }
            if(!data.email || data.email.length <3){
                err.email="Email is required and should be greater than 3 character "
            }
            
            setErrors(err)
            return err.name || err.age || err.email ? false :true

      }
    },
    {
      name: "Intrests",
      component: Intrests,
      validate:()=>{
        const err={}

        if(data.intrests.length < 1){
            err.intrestsErr="Select At least One Intrest"
        }

        setErrors(err)
        return err.intrestsErr ? false:true
      }
    },
    {
      name: "Settings",
      component: Settings,
      validate:()=>{
        return true
      }
    },
  ];

  const ActiveComponents = tabs[activeTab].component;

  const handleNextClick=()=>{
    if(tabs[activeTab].validate()){
        setActiveTab((prev)=>prev+1)
    }
  }
  const handlePrevClick=()=>{
     if(tabs[activeTab].validate()){
        setActiveTab((prev)=>prev-1)
    }
  }
  const handleSubmitClick=()=>{
    console.log("Subimt click");
    
  }

  return (
    <div className="w-full p-10 h-full">
      <div className="flex ">
        {tabs.map((t, index) => (
          <div key={index} className="p-10 flex">
            <button
              onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
              className="border border-black-300 p-2 cursor-pointer"
            >
              {t.name}
            </button>
          </div>
        ))}
      </div>
      <div className="pl-10 pt-4 border w-full h-[300px]">
        <ActiveComponents errors={errors} setErrors={setErrors} data={data} setData={setData}/>
      </div>
      <div>
        {activeTab>0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab<tabs.length-1 && <button onClick={handleNextClick}>Next</button>}
        {activeTab===tabs.length-1 && <button onClick={handleSubmitClick}>Submit</button>}
      </div>
    </div>
  );
};

export default TabForm;
