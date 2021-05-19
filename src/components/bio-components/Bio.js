import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { selectChar } from '../../redux/characterSlice';

import { Descriptions, Typography } from 'antd'
const { Text } = Typography

const Bio = ({ bio }) => {
  // const char = useSelector(selectChar)
  // const bio = char.bio
  //controlled form state
  console.log(bio)
  const [nameStr, setNameStr] = useState(bio.name)
  const [specStr, setSpecStr] = useState(bio.species)
  const [classStr, setClassStr] = useState(bio.class)
  const [carStr, setCarStr] = useState(bio.career)
  const [carLvlStr, setCarLvlStr] = useState(bio.careerLevel)
  const [statusStr, setStatusStr] = useState(bio.status)
  const [carPathStr, setCarPathStr] = useState(bio.careerPath)

  return(
    <Descriptions
      size="small"
      bordered
      column={{ xxl: 4, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
      style={{background: '#141414'}}
    >
      <Descriptions.Item label="Name"><Text editable={{onChange: setNameStr}}>{nameStr}</Text></Descriptions.Item>
      <Descriptions.Item label="Species"><Text editable={{onChange: setSpecStr}}>{specStr}</Text></Descriptions.Item>
      <Descriptions.Item label="Class"><Text editable={{onChange: setClassStr}}>{classStr}</Text></Descriptions.Item>
      <Descriptions.Item label="Career"><Text editable={{onChange: setCarStr}}>{carStr}</Text></Descriptions.Item>
      <Descriptions.Item label="Career Level"><Text editable={{onChange: setCarLvlStr}}>{carLvlStr}</Text></Descriptions.Item>
      <Descriptions.Item label="Status"><Text editable={{onChange: setStatusStr}}>{statusStr}</Text></Descriptions.Item>
      <Descriptions.Item label="Career Path"><Text editable={{onChange: setCarPathStr}}>{carPathStr}</Text></Descriptions.Item>
    </Descriptions>
  );
}

export default Bio;