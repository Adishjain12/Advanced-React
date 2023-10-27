import { useState } from "react";

const ToggleChallenge = () => {
  const [val,setVal]=useState("false");
  const handleClick=()=>{
    setVal(!val);
  }
  return <>
  <button onClick={handleClick}>Toggle</button>
  {!val&&<h3>Toggle mode on</h3>}
  </>;
};

export default ToggleChallenge;