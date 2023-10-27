import { useState } from 'react'
const UseStateGotcha = () => {
  const [count,setCount]=useState(0);
  const handleClick=()=>{
    setCount((currentState)=>{
    const newState=currentState+1;
    console.log(newState);
    return newState;
    });
    }
  return <>
  <h2>{count}</h2>
  <button type='button' className='btn' onClick={handleClick}>Click me</button>
  </>;
};

export default UseStateGotcha;
