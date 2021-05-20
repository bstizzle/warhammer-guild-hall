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
    character(id: "60a5e9348a913f3fc433cbd5"){
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

export const CharContext = React.createContext(null);

const CharacterSheet = () => {
  const [char, setChar] = useState(null);
  const { loading, error, data } = useQuery(GET_CHARACTER)

  if(error) {
    return <h1>Something went wrong!</h1>
  } else if(loading) {
    return <Loading />
  } else {
    console.log(char)
    if(char === null){
      setChar(data.character)
    }
    console.log(char)

    return(
      <CharContext.Provider value={[char, setChar]}>
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
      </CharContext.Provider>
    )
  }
}

export default CharacterSheet;