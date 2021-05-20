import React, { useState, useContext, useEffect } from 'react';
import { CharContext } from '../CharContextProvider';
import { Typography } from 'antd';
const { Text } = Typography;

const EditableCell = (props) => {
  const { char, setChar } = useContext(CharContext);
  const [field, setField] = useState(props.children[1].toString())
  const bscSkillKeys = char.basicSkills.map((s) => {
    return s.name
  })

  useEffect(() => {
    if(bscSkillKeys.includes(props.record.name)){
      const index = char.basicSkills.findIndex(s => s.name === props.record.name)
      if(parseInt(field, 10) !== props.record.total){
        console.log(char.basicSkills)
        const updatedSkills = char.basicSkills
        updatedSkills.splice(index, 1, {
          name: props.record.name,
          stat: props.record.stat,
          adv: parseInt(field, 10)
        })
        console.log(updatedSkills)
        setChar(char => ({
          ...char,
          basicSkills: updatedSkills
        }))
      }
    }
  }, [field])

  let childNode = props.children;
  if(props.editable){
    childNode = <Text editable={{onChange: setField}}>{field}</Text>
  }

  return <td>{childNode}</td>;
};

export default EditableCell;