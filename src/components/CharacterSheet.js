import React, { useContext } from 'react';
import { Row, Col, Button } from 'antd';
import { CharContext } from './CharContextProvider';
import DetailSelector from './details-components/DetailSelector';
import { Stats, SkillsSelector, Bio, Fate, Resolve, Wounds } from './bio-components/bioExport';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const UPDATE_CHARACTER = gql`
  mutation UpdateCharacter($id: ID, $input: CharacterInput){
    updateCharacter(
      id: $id,
      input: $input
    ){
      _id,
      bio {
        name
        career
      }
    }
  }
`

const CharacterSheet = () => {
  const { char, setChar } = useContext(CharContext)
  const [updateCharacter, { data }] = useMutation(UPDATE_CHARACTER);

  return(
    <>
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
      <Row>
        <Button 
          type="primary"
          onClick={() => {
            updateCharacter({
              variables: {
                id: char._id,
                input: {
                  bio: char.bio,
                  stats: char.stats,
                  basicSkills: char.basicSkills,
                  advSkills: char.advSkills,
                  talents: char.talents,
                  fate: char.fate,
                  resolve: char.resolve,
                  currentWounds: char.currentWounds
                }
              }
            })
          }}
        >
          Save Changes
        </Button>
      </Row>
    </>
  )
}

export default CharacterSheet;