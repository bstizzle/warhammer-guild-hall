//library imports
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setChar, selectChar } from '../redux/characterSlice';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button } from 'antd';

//component imports
import { data } from '../fakeDb/fakeData';
import { Trappings, Armor, Weapons, DetailSelector } from './details-components/detailsExport';
import { Stats, Skills, Bio, Talents, Fate, Resolve, Wounds } from './bio-components/bioExport';

const CharacterSheet = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const char = useSelector(selectChar);
  const [detailPage, setDetailPage] = useState('Trappings')
  console.log(char)

  useEffect(() => {
    dispatch(setChar(data))
  }, [dispatch])

  return(
    <Row>
      <Col span={16}>
        {char.bio ? <Bio /> : null}
        {char.stats ? <Stats /> : null}
        <Row>
          {char.fate ? <Fate /> : null}
          {char.resolve ? <Resolve /> : null}
          {char.stats ? <Wounds /> : null}
        </Row>
        {char.basicSkills ? <Skills /> : null}
        {char.talents ? <Talents /> : null}
      </Col>
      <Col span={8}>
        {/* refactor these to be rendered in detailSelector */}
        <DetailSelector detailPage={detailPage} setDetailPage={setDetailPage} />
        {detailPage === 'Trappings' ? <Trappings /> : null}
        {detailPage === 'Armor' ? <Armor /> : null}
        {detailPage === 'Weapons' ? <Weapons /> : null}
      </Col>


      <Button onClick={()=>history.push("/")}>BACK TO HOME PAGE</Button>

      {/*
        Experience
        Movement
        Ambitions
        Party
        Armor Points
        Psychology
        Corruption/Mutation
        Spells
        Wounds
        Wealth
        Encumberance
      */}
      </Row>
  );
}

export default CharacterSheet;