
export const isBioCell = (char, setChar, record, field) => {
  const index = record.key
  const numField = parseInt(field, 10)
  //makes sure we don't overwrite the adv value when total updates
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

export const isTalentCell = (char, setChar, record, field) => {
  const index = record.key
  console.log(record.key)
  const updatedTalents = char.talents
  //check whether we are updating the name or the times
  if(Number.isInteger(parseInt(field, 10))){
    console.log('is number')
    updatedTalents.splice(index, 1, {
      name: record.name,
      times: parseInt(field, 10)
    })
    console.log(updatedTalents)
  } else {
    console.log('is name')
    updatedTalents.splice(index, 1, {
      name: field,
      times: record.times
    })
    console.log(updatedTalents)
  }
  setChar(char => ({
    ...char,
    talents: updatedTalents
  }))
}