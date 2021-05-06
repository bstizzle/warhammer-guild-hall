import React from 'react';

import { useSelector } from 'react-redux';
import { selectChar } from '../redux/characterSlice';

function Stats() {
  const char = useSelector(selectChar)

  function statJSX(stat){
    return(
      <div className="sheet-div">
        {stat}: {char.stats[stat]}
      </div>
    )
  }

  return(
    <div className="sheet-row">
      {statJSX("WS")}
      {statJSX("BS")}
      {statJSX("S")}
      {statJSX("T")}
      {statJSX("I")}
      {statJSX("Ag")}
      {statJSX("Dex")}
      {statJSX("Int")}
      {statJSX("WP")}
      {statJSX("Fel")}
    </div>
  );
}

export default Stats;