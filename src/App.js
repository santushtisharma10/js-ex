import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Start from './components/Start';
import TabCont from './components/Tabs';


function App() {

  //const [dis, setDis] = useState(true)

  return (
    <div className="App">
      <h1>Js Exercise</h1>
      <div className="card">
        <TabCont />        
      </div>
    </div>
  );
}

export default App;
