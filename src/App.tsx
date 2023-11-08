import React, {useEffect} from 'react';
import './App.css';

function App() {
  useEffect(()=>{
    let f = function(x:number) {alert(x)};
    (function(){f(1)}())
  },[])


  return (
    <div className="App">
      <div>
        something
      </div>
    </div>
  );
}

export default App;
