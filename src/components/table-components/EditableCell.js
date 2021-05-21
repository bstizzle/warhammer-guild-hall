import React, { useState, useContext, useEffect } from 'react';
import { CharContext } from '../CharContextProvider';
import { Typography } from 'antd';
const { Text } = Typography;

const EditableCell = ({ editable, children, record }) => {
  const { char, setChar } = useContext(CharContext);
  const [field, setField] = useState(children[1].toString())
  // console.log(record)
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
    } else if(record.times) {
      const index = char.talents.findIndex(t => t.name === record.name)
      const updatedTalents = char.talents
      // console.log(updatedTalents)
      if(Number.isInteger(parseInt(field, 10))){
        console.log('is number')
        updatedTalents.splice(index, 1, {
          name: record.name,
          times: parseInt(field, 10)
        })
      } else {
        updatedTalents.splice(index, 1, {
          name: field,
          times: record.times
        })
      } 
      // console.log(updatedTalents)
      setChar(char => ({
        ...char,
        talents: updatedTalents
      }))
    }
  }, [field])

  let childNode = children;
  if(editable){
    childNode = <Text editable={{onChange: setField}}>{field}</Text>
  }

  return <td>{childNode}</td>;
};

export default EditableCell;