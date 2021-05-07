import React from 'react';

const DetailSelector = ({ setDetailPage }) => {

  function handleSetDetail(event) {
    console.log(event.target.innerHTML)
    setDetailPage(`${event.target.innerHTML}`)
  }
  return(
    <div className="sheet-row">
      <div className="sheet-div">
        <button onClick={handleSetDetail}>Trappings</button>
      </div>
      <div className="sheet-div">
        <button onClick={handleSetDetail}>Armor</button>
      </div>
      <div className="sheet-div">
        <button onClick={handleSetDetail}>Weapons</button>
      </div>
    </div>
  );
}

export default DetailSelector;