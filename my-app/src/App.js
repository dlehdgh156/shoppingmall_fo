import React, {useState} from 'react';
import { useEffect } from 'react';


function App() {

  const [msg,SetMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((res) => res.text())
      .then((text) => setMsg(text));
  }, []);

  return <div>{msg}</div>;
  
}

export default App;
