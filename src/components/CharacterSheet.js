import React from 'react';
import { data } from '../fakeDb/fakeData';

function CharacterSheet() {

  return(
    <div>
      <div className="sheet-row">
        <div className="sheet-div">
          {data.name}
        </div>
          <div className="sheet-div">
        {data.species}
        </div>
        <div className="sheet-div">
          {data.class}
        </div>
        <div className="sheet-div">
          {data.career}
        </div>
      </div>
      <div className="sheet-row">
        <div className="sheet-div">
          WS: {data.characteristics.WS}
        </div>
        <div className="sheet-div">
          DS: {data.characteristics.DS}
        </div>
        <div className="sheet-div">
          S: {data.characteristics.S}
        </div>
        <div className="sheet-div">
          T: {data.characteristics.T}
        </div>
        <div className="sheet-div">
          I: {data.characteristics.I}
        </div>
        <div className="sheet-div">
          Ag: {data.characteristics.Ag}
        </div>
        <div className="sheet-div">
          Dex: {data.characteristics.Dex}
        </div>
        <div className="sheet-div">
          Int: {data.characteristics.Int}
        </div>
        <div className="sheet-div">
          WP: {data.characteristics.WP}
        </div>
        <div className="sheet-div">
          Fel: {data.characteristics.Fel}
        </div>
      </div>
    </div>
  );
}

export default CharacterSheet;