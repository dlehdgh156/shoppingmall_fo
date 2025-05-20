import React, {useState} from 'react';
import { useEffect } from 'react';


function App() {

  return (
    <div>
     <button onClick={handleCountUpdate}>update</button>
     <span>{count}</span>
     <input type="text" value={name} onChange={handleName}></input>
     <span>{name}</span>
    </div>
  )
  
}

export default App;
