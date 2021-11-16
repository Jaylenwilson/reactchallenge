import React from 'react';
import { useState } from 'react';



import './App.css';
import Input from './component/Input';
import View from './component/View';

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [hobbies, setHobbies] = useState('')
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <Input setName={setName} setAge={setAge} setHobbies={setHobbies} />
        <View name={name} age={age} hobbies={hobbies} />
      </header>

    </div>
  );
}

export default App;
