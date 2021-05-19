//library imports
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setChar, selectChar } from '../redux/characterSlice';
import { Row, Col } from 'antd';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

//component imports
import DetailSelector from './details-components/DetailSelector';
import { Stats, SkillsSelector, Bio, Fate, Resolve, Wounds } from './bio-components/bioExport';

const GET_CHARACTER = gql`
{
  character(id: "60a46fc399e641048cadc2bf"){
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
  const [hasError, setHasError] = useState(false)
  const [char, setChar] = useState();
  const { loading, error, data } = useQuery(GET_CHARACTER)
  // const dispatch = useDispatch();
  // const char = useSelector(selectChar);
  // let displayChar;
  // console.log(data)
  // console.log(displayChar)
  // if(char){
  //   if(char.bio){
  //     displayChar = char
  //   }
  // }

  // useEffect(() => {
  //   dispatch(setChar(data))
  // }, [dispatch, data])

  if(error) {
    return <h1>Something went wrong!</h1>
  } else if(loading) {
    return <h1>Loading...</h1>
  } else {
    if(char !== data){
      setChar(data)
    }
    console.log(char)

    // try{
    //   console.log('tried')
    //   if(char === undefined){
    //     throw new Error("Loading")
    //   }
    // } catch {
    //   console.log('caught')
    //   setHasError(true);
    // }

    return(
      <>
      {hasError === false ? <Row>
        <Col span={16}>
          {char ? <Bio /> : null}
          {char ? <Stats /> : null}
          <Row>
            {char ? <Fate /> : null}
            {char ? <Resolve /> : null}
            {char ? <Wounds /> : null}
          </Row>
          {/* {char.bio ? <SkillsSelector /> : null} */}
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
      :
      null
      }
      </>
    )
  }
}

export default CharacterSheet;