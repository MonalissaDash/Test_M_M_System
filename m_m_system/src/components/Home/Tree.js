import React from 'react'

const Tree=({checkable,
  defaultExpandedKeys,
  defaultSelectedKeys,
  defaulthoverKeys,
  onSelect,
  treeData})=>(
    <>
    {treeData.map((data,key)=>(
      <div>
      <ul>
      <li onclick={defaultExpandedKeys}  key={data.id}>{data.moduleName}</li>
      ({data.next})
      <li onMousehover={defaulthoverKeys}><input type="text"></input>
      <button>Edit</button>
      <button>Delete</button>
      </li>
  </ul>
  </div>
    ))}
  
  </>
  );

  export default Tree;