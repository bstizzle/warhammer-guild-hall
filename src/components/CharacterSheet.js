//library imports
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setChar, selectChar } from '../redux/characterSlice';
import { Row, Col } from 'antd';

//component imports
import { data } from '../fakeDb/fakeData';
import DetailSelector from './details-components/DetailSelector';
import { Stats, Skills, Bio, Talents, Fate, Resolve, Wounds } from './bio-components/bioExport';

const CharacterSheet = () => {
  const dispatch = useDispatch();
  const char = useSelector(selectChar);

  useEffect(() => {
    dispatch(setChar(data))
  }, [dispatch])

  return(
    <>
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
        <DetailSelector />
      </Col>
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
    </>
  );
}

export default CharacterSheet;