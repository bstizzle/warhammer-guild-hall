import React from 'react';
import { Row, Col } from 'antd';
import { CharContextProvider } from './CharContextProvider';
import DetailSelector from './details-components/DetailSelector';
import { Stats, SkillsSelector, Bio, Fate, Resolve, Wounds } from './bio-components/bioExport';

const CharacterSheet = () => {
  return(
    <CharContextProvider>
      <Row>
        <Col span={16}>
          <Bio />
          <Stats />
          <Row>
            <Fate />
            <Resolve />
            <Wounds />
          </Row>
          <SkillsSelector />
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
          Wealth
          Encumberance
        */}
      </Row>
    </CharContextProvider>
  )
}

export default CharacterSheet;