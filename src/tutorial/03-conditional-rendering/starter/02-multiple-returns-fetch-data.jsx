import { useEffect, useState } from 'react';
import '../../../index.css'

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user,setUser]=useState(null);
  const [isLoading,setLoading]=useState(true);
  useEffect( ()=>{const fun=async ()=>{
    const response=await fetch(url);
    let a=await response.json();
    setUser(a);
    setLoading(false);
    console.log(a);
  };
  fun();
},[]);
  return <div className="container">
  <h2>Fetch Data Example</h2>
  <div className="content">
  {isLoading?<h3>Loading...</h3>:(
      <div className="card">
        <div><img src={user.avatar_url} alt="" style={{height:"70px",width:"70px"}} /></div>
        <div className="box"><h5>{user.login}</h5><a href={user.html_url}>Profile</a></div>
        </div>)} 
  </div>
  </div>;
};

export default MultipleReturnsFetchData;


