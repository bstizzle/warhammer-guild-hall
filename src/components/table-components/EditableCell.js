import React, { useState } from 'react';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Typography } from 'antd';
const { Text } = Typography;

const EditableCell = ({ editable, children }) => {
  const [field, setField] = useState(children[1])

  // function handleSetField(string) {
  //   updateCharacter({
  //     variables: {
  //       id: string.id
  //     }
  //   })
  //   setField(string)
  // }

  let childNode = children;
  if(editable){
    childNode = <Text editable={{onChange: setField}}>{field}</Text>
  }

  return <td>{childNode}</td>;
};

export default EditableCell;