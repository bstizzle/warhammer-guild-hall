import React from 'react';
import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

import { Descriptions } from 'antd'

const Bio = () => {
  const char = useSelector(selectChar)
  const bio = char.bio

  //figure out a way to automate two static rows
  
  // const bioKeys = Object.keys(bio)
  // const fullBio = bioKeys.map(b => {
  //   return(
  //     <div key={b} className="sheet-div">
  //       {b}: {bio[b]}
  //     </div>
  //   )
  // })

  return(
    <Descriptions
      title={bio["Name"]}
      size="small"
      bordered
    >
      <Descriptions.Item label="Species">{bio["Species"]}</Descriptions.Item>
      <Descriptions.Item label="Class">{bio["Class"]}</Descriptions.Item>
      <Descriptions.Item label="Career">{bio["Career"]}</Descriptions.Item>
      <Descriptions.Item label="Career Path">{bio["Career Path"]}</Descriptions.Item>
      <Descriptions.Item label="Career Level">{bio["Career Level"]}</Descriptions.Item>
      <Descriptions.Item label="Status">{bio["Status"]}</Descriptions.Item>
    </Descriptions>
  );
}

export default Bio;