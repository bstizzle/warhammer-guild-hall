import React, { useState, useContext, useEffect } from 'react';

import { isBioCell, isTalentCell } from './cellTypeLogic';

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
    console.log(record)
    if(bscSkillKeys.includes(record.name)) {
      isBioCell(char, setChar, record, field)
    } else if(parseInt(record.times, 10) >= 0) {
      isTalentCell(char, setChar, record, field)
    }
  }, [field])

  let childNode = children;
  if(editable){
    childNode = <Text editable={{onChange: setField}}>{field}</Text>
  }

  return <td>{childNode}</td>;
};

export default EditableCell;