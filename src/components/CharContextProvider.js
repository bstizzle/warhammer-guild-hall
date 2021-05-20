import React, { useState } from 'react';
import Loading from './Loading';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const CharContext = React.createContext(null);

const GET_CHARACTER = gql`
  {
    character(id: "60a6b49f48c0eb3704ad114c"){
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

export const CharContextProvider = props => {
  const [char, setChar] = useState(null)
  const { loading, error, data } = useQuery(GET_CHARACTER)

  if(error) {
    return <h1>Something went wrong!</h1>
  } else if(loading) {
    return <Loading />
  } else {
    if(char === null){
      setChar(data.character)
    }
    
    return(
      <CharContext.Provider value={{char, setChar}}>
        {props.children}
      </CharContext.Provider>
    )
  }
}