import { Tree } from 'antd';
import React from 'react'
const treeData =[{
    "id": 1,
    "moduleName": "Menu A",
    "moduleType": "Menu",
    "parentModuleId": 0,
    "children": [
        {
            "id": 2,
            "moduleName": "Sub Menu A1 ",
            "moduleType": "Sub Menu",
            "parentModuleId": 1,
            "children": [
                {
                    "id": 71,
                    "moduleName": "Module A1",
                    "moduleType": "Module",
                    "parentModuleId": 2
                },
                {
                    "id": 70,
                    "moduleName": "Module A2",
                    "moduleType": "Module",
                    "parentModuleId": 2
                }
            ]
        },
        {
            "id": 58,
            "moduleName": "Sub Menu A2 ",
            "moduleType": "Sub Menu",
            "parentModuleId": 1,
            "children":[]
        }
    ]
},

 
];

const Home= () => {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onMouseHover = (hoverKeys, info) => {
    console.log('onHover', hoverKeys, info);
  };

  return (
    <Tree
      checkable
      defaultExpandedKeys={['1','2']}
      defaultSelectedKeys={['1', '2']}
      defaulthoverKeys={['71', '70']}
      onSelect={onSelect}
      onCheck={onMouseHover}
      treeData={treeData}
    />
  );
};

export default Home;