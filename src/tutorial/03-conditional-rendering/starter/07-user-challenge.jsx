import { useState } from "react";

const UserChallenge = () => {
  const [user,setUser]=useState(null);
  const handleClick=()=>{
    if(!user){
      setUser({name:"Adish"})
    }
    else{
      setUser(null);
    }
  }
  return <>
  {
  !user?<h2>Please login</h2>:<h2>Hello there,{user.name}</h2>
  }
  <button onClick={handleClick} className="btn">{!user?"Login":"Logout"}</button>
  </>;
};

export default UserChallenge;
