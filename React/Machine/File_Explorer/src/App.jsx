import { useState } from "react";
import structJson from "./struct.json"
import StructureRender from "./components/StructureRender";

const App = () => {

const [data, setData] = useState(structJson)


const addNodeToList=(parentId)=>{

  let name=prompt("Enter Your Foldre Name")
  
  const updateList=(list)=>{
          return list.map((node)=>{
            if(node.id === parentId){
              return {
                ...node,
                children:[
                  ...node.children,
                  {
                    id:crypto.randomUUID(),
                    name:name,
                    isFolder:true,
                    children:[]
                  }
                ]
              }
            }

            if(node.children){
              return {
                ...node,
                children:updateList(node.children)
              }
            }
            return node
          })
    }
  setData((prev)=>updateList(prev))
}



  return (
    <div className="m-10 p-10 border w-fit h-full">
      <StructureRender list={data} addNodeToList={addNodeToList}/>
    </div>
  );
}

export default App;
