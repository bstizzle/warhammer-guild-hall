//library imports
import React, { useState } from 'react';
import { Row, Col } from 'antd';

//server imports
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

//component imports
import Loading from './Loading';
import DetailSelector from './details-components/DetailSelector';
import { Stats, SkillsSelector, Bio, Fate, Resolve, Wounds } from './bio-components/bioExport';

const GET_CHARACTER = gql`
  {
    character(id: "60a4a31c9d89db279860f8e4"){
      bio {
        name
        species
        class
        career
        careerLevel
        careerPath
        status
      }
      stats {
        WS {
          stat
          adv
        }
        BS {
          stat
          adv
        }
        S {
          stat
          adv
        }
        T {
          stat
          adv
        }
        I {
          stat
          adv
        }
        Ag {
          stat
          adv
        }
        Dex {
          stat
          adv
        }
        Int {
          stat
          adv
        }
        WP {
          stat
          adv
        }
        Fel {
          stat
          adv
        }
      }
      basicSkills {
        name
        desc
        stat
        adv
      }
      talents {
        name
        times
      }
      fate {
        fate
        fortune
      }
      resolve {
        resolve
        resilience
      }
      currentWounds
    }
  }
`

const CharacterSheet = () => {
  const [char, setChar] = useState();
  const { loading, error, data } = useQuery(GET_CHARACTER)

  if(error) {
    return <h1>Something went wrong!</h1>
  } else if(loading) {
    return <Loading />
  } else {
    if(char !== data.character){
      setChar(data.character)
    }
    console.log(char)

    return(
      <>
      <Row>
        <Col span={16}>
          {char ? <Bio bio={char.bio} /> : null}
          {char ? <Stats stats={char.stats} /> : null}
          <Row>
            {char ? <Fate fate={char.fate} /> : null}
            {char ? <Resolve resolve={char.resolve} /> : null}
            {char ? <Wounds stats={char.stats} currentWounds={char.currentWounds} /> : null}
          </Row>
          {char ? <SkillsSelector stats={char.stats} advSkills={char.advSkills} basicSkills={char.basicSkills} talents={char.talents} /> : null}
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
    )
  }
}

export default CharacterSheet;