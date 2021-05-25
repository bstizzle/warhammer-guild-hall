import React, { useState, useContext, useEffect } from 'react';

import { isBscSkillCell, isAdvSkillCell, isTalentCell } from './cellTypeLogic';

import { CharContext } from '../CharContextProvider';
import { Typography, InputNumber } from 'antd';
const { Text } = Typography;

const EditableCell = ({ editable, children, record }) => {
  const { char, setChar } = useContext(CharContext);
  const [field, setField] = useState(children[1].toString())

  useEffect(() => {
    console.log(record)
    console.log(children)
    if(record.type === 'bscSkill') {
      isBscSkillCell(char, setChar, record, field)
    } else if(record.type === 'advSkill') {
      isAdvSkillCell(char, setChar, record, field)
    } else if(record.type === 'talent') {
      isTalentCell(char, setChar, record, field)
    }
  }, [field])

  let childNode = children;
  if(editable){
    if(parseInt(field, 10) >= 0){
      childNode = <InputNumber size="small" style={{maxWidth: '40%'}} min={0} max={99} defaultValue={field} onChange={setField} />
    } else {
      childNode = <Text editable={{onChange: setField}}>{field}</Text>
    }
  }

  return <td>{childNode}</td>;
};

export default EditableCell;