import React from 'react';
import { useSelector } from 'react-redux';
import { selectChar } from '../../redux/characterSlice';

import { Row, Col } from 'antd'

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
    <>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          Name: {bio["Name"]}
        </Col>
        <Col span={6}>
          Species: {bio["Species"]}
        </Col>
        <Col span={6}>
          Class: {bio["Class"]}
        </Col>
        <Col span={6}>
          Career: {bio["Career"]}
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          Career Path: {bio["Career Path"]}
        </Col>
        <Col span={6}>
          Career Level: {bio["Career Level"]}
        </Col>
        <Col span={6}>
          Status: {bio["Status"]}
        </Col>
      </Row>
    </>
  );
}

export default Bio;