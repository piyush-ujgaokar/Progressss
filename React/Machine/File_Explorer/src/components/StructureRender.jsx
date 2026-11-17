import { useState } from "react";

const StructureRender = ({ list,addNodeToList }) => {
  const [isExpanded, setIsExpanded] = useState({});

  return (
    <div>
      {list.map((node) => {
        return (
          <div key={node.id} className="pl-7 pt-2 font-medium ">
            <div className="cursor-pointer flex">
              {node.isFolder && (
                <span
                  onClick={() =>
                    setIsExpanded((prev) => ({
                      ...prev,
                      [node.name]: !prev[node.name], //pahele ye object me nahi rahega fir ek key ban jayegi usme undefined store hoga badme hum usee ! kr rahe hai to wo tru ban jayega kyuki pahele undefined store that aaur undefined falsy value hai to ! lagane se wo tru ban gaya uss wajh se object ke aandr true ya false set ho raha hai
                    }))
                  }
                  className="cursor-pointer"
                >
                  {isExpanded?.[node.name] ? "-" : ">"}
                </span>
              )}
               <div className="gap-2 flex">
              {node.name}
                {node?.isFolder && <span onClick={()=>addNodeToList(node.id)} className="text-sm"><img className="w-5 h-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbmFUnhBCPCREyozNMCZMl-jbvJb7Xz6pfvrXRBVj5PDpbZD3xOv5WXe-n&s=10" alt="" /></span>}              
                </div>
            </div>
            {isExpanded?.[node.name] && node?.children && (
              <StructureRender list={node.children} addNodeToList={addNodeToList} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StructureRender;
