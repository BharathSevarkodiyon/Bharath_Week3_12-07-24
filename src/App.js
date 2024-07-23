// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  let [mobileName, setMobileName] = useState(["MI", "Oppo", "Vivo", "One Plus"]);
  let [temp, setTemp] = useState('')
  const updateList = (data)=>{
    // console.log(data.target.value);
    setTemp(data.target.value)
  }
  const submit = (e)=>{
    e.preventDefault();
    setMobileName([...mobileName, temp]);
    document.querySelector("input").value="";
  }
  return (
    <div className="container">
      {/* To display the details present in the list */}
      <h5>Display a list of items</h5>
      {
        mobileName.map((name, index)=>{
          return(
          <div key={index} className='list'>{name}</div>
          )
        })
      }
      {/* To add the details in the list */}
      <form>
        <h5>Add new items to the list</h5>
        <input type='text' onChange={updateList} placeholder='Add mobile name here!!'/>
        <button onClick={submit} type='submit'>Add</button>
      </form>
    </div>
  );
}

export default App;
