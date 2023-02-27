import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [excuse,setExcuse] = useState('');
  const getExcuse = (category) => {
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`).then((res)=>{
      setExcuse(res.data[0].excuse);
    })
  }
  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={()=>getExcuse('party')}>Party</button>
      <button onClick={()=>getExcuse('family')}>Family</button>
      <button onClick={()=>getExcuse('office')}>Office</button>
      <p>{excuse}</p>
    </div>
  );
}

export default App;
