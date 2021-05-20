import React, { useState, useContext, useEffect } from 'react';
import { CharContext } from '../CharContextProvider';
import { Typography } from 'antd';
const { Text } = Typography;

const EditableCell = ({ editable, children, record }) => {
  const { char, setChar } = useContext(CharContext);
  const [field, setField] = useState(children[1].toString())
  const bscSkillKeys = char.basicSkills.map((s) => {
    return s.name
  })

  useEffect(() => {
    if(bscSkillKeys.includes(record.name)){
      const index = char.basicSkills.findIndex(s => s.name === record.name)
      const numField = parseInt(field, 10)
      if(numField !== record.total){
        const updatedSkills = char.basicSkills
        updatedSkills.splice(index, 1, {
          name: record.name,
          stat: record.stat,
          adv: numField
        })
        console.log('cell effect!')
        setChar(char => ({
          ...char,
          basicSkills: updatedSkills
        }))
      }
    }
  }, [field])

  let childNode = children;
  if(editable){
    childNode = <Text editable={{onChange: setField}}>{field}</Text>
  }

  return <td>{childNode}</td>;
};

export default EditableCell;