import {useState } from "react";
import Profile from "./Profile";
import Intrests from "./Intrests";
import Settings from "./Settings";

const TabForm = () => {

    const [data, setData] = useState({
        name:"piyush",
        age:20,
        email:"piyush@gmail.com",
        intrests:["coding","travelling","dancing"],
        theme:"dark"
    })
    const [activeTab, setActiveTab] = useState(0)
    const [errors, setErrors] = useState({})

    console.log("errors",errors);
    console.log("data",data.email);

    

    const tabs=[
        {
            name:"profile",
            component:Profile,
            validate:()=>{
                const err={}
                if(!data.name || data.name.length<3){
                    err.name="Name is required or Greater that 3"
                }
                if(!data.age || data.age<18){
                    err.age="age is required or Greater that 18"
                }
                if(!data.email || data.email<3){
                    err.email="Email is required or Greater that 3"
                }

                setErrors(err)
                return err.name || err.age || err.email ? false :true
            }
        },
        {
            name:"intrests",
            component:Intrests,
            validate:()=>{
                const err={}

                if(data.intrests.length<1){
                    err.intrestsErr="Select Minimum 1 Intrests"
                }
                setErrors(err)
                return err.intrestsErr ?false :true
            }
        },
        {
            name:"settings",
            component:Settings
        }
    ]

    const AllComponents=tabs[activeTab].component

    const handlePrevClick=()=>{
           if(tabs[activeTab].validate()){
             setActiveTab((prev)=>prev-1)
           }
    }
    const handleNextClick=()=>{
           if(tabs[activeTab].validate()){
             setActiveTab((prev)=>prev+1)
           }
    }
    const handleSubmitClick=()=>{}

  return (
    <div >
       <div className="flex gap-10">
         {tabs.map((t,index)=>(
            <div key={index} >
                <button onClick={()=>setActiveTab(index)} className="border p-2 cursor-pointer">{t.name}</button>
            </div>
        ))}
       </div>
       <div className="p-10 border mt-2 h-[300px]">
            <AllComponents errors={errors} setErrors={setErrors} data={data} setData={setData} />
       </div>
       <div>
        {activeTab>0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab<tabs.length-1 && <button onClick={handleNextClick}>Next</button>}
        {activeTab===tabs.length-1 && <button onClick={handleSubmitClick}>Submit</button>}
       </div>
    </div>
  );
}

export default TabForm;
