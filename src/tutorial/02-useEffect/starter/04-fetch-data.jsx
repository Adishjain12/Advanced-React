import { useEffect, useState } from "react";
import '../../../index.css'
const url = 'https://api.github.com/users';

const FetchData = () => {
  const [user,setUser]=useState([]);
  useEffect( ()=>{const fun=async ()=>{
    const response=await fetch(url);
    let a=await response.json();
    setUser(a);
    console.log(a);
  };
  fun();
},[]);
  return <div className="container">
  <h2>Fetch Data Example</h2>
  <div className="content">
    {user.map((item)=>{
      return <div className="card" key={item.id}><div><img src={item.avatar_url} alt="" style={{height:"70px",width:"70px"}} /></div><div className="box"><h5>{item.login}</h5><a href={item.html_url}>Profile</a></div></div>
    })}
  </div>
  </div>;
};
export default FetchData;
