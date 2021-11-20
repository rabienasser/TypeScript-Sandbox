import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import Form from './components/Form'

export interface InterfaceState {
  people: {
    name: string
    url: string
    age: number
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<InterfaceState['people']>([])

  return (
    <div className="App">
      <h1>People Invited To My Party</h1>
      <List people={people} />
      <Form people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
