import React, { useState } from 'react';



function Home() {

  const [color, setColor] = useState(false)

  const onClickHandler = () => {
    setColor(!color);
  }
  return (
    <div>
      <h1 style={{color: color ? "black" : "orange"}}>Helloo</h1>
      <button onClick={onClickHandler}>click me</button>
      
    </div>
  );
}

export default Home;
