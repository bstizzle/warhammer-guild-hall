
export const isBioCell = (char, setChar, record, field) => {
  const index = char.basicSkills.findIndex(s => s.name === record.name)
  const numField = parseInt(field, 10)
  if(numField !== record.total){
    const updatedSkills = char.basicSkills
    updatedSkills.splice(index, 1, {
      name: record.name,
      stat: record.stat,
      adv: numField
    })
    console.log('cell effect!')
    setChar(char => ({
      ...char,
      basicSkills: updatedSkills
    }))
  }
}

//change createCharacter mutation to create talents/advskills with
//26 empty columns, so no need to push new talents/skills to the lists
//just edit empty ones
export const isTalentCell = (char, setChar, record, field) => {
  const index = char.talents.findIndex(t => t.name === record.name)
  const updatedTalents = char.talents
  if(Number.isInteger(parseInt(field, 10))){
    console.log('is number')
    updatedTalents.splice(index, 1, {
      name: record.name,
      times: parseInt(field, 10)
    })
  } else {
    console.log('is name')
    updatedTalents.splice(index, 1, {
      name: field,
      times: record.times
    })
  }
  setChar(char => ({
    ...char,
    talents: updatedTalents
  }))
}