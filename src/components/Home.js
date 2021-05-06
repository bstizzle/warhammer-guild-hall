import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  return(
    <div className="header-container">
      <h1>HOME PAGE</h1>
      <button onClick={()=>history.push("./sheet")}>GO TO CHARACTER SHEET</button>
    </div>
  );
}

export default Home;