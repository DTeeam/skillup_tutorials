import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  turtles: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [turtles, setTurtles] = useState<IState['turtles']>([
    {
      name: 'Leonardo',
      url: 'https://www.clipartmax.com/png/middle/247-2477141_leonardo-ninja-turtle-teenage-mutant-ninja-turtles-2003-leonardo.png',
      age: 16,
      note: "'s always in control",
    },
    {
      name: 'Michelangelo',
      url: 'https://www.clipartmax.com/png/middle/23-231862_michelangelo-ninja-turtle-clip-art-teenage-mutant-ninja-turtles-2003-michelangelo.png',
      age: 16,
      note: 'And the wise guy is Michelangelo',
    },
    {
      name: 'Donnatelo',
      url: 'https://www.nicepng.com/png/detail/36-362755_tutle-donatello-png-image-purepng-free-cc-teenage.png',
      age: 16,
      note: "He's the great of the bunch",
    },
    {
      name: 'Raphael',
      url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e26136d0-b32c-4f03-a237-833e2d5f19c9/ddypu72-b0497f86-2920-4f44-af69-33511562831e.png/v1/fill/w_447,h_558/raphael__2003__by_docmassive_ddypu72-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTU4IiwicGF0aCI6IlwvZlwvZTI2MTM2ZDAtYjMyYy00ZjAzLWEyMzctODMzZTJkNWYxOWM5XC9kZHlwdTcyLWIwNDk3Zjg2LTI5MjAtNGY0NC1hZjY5LTMzNTExNTYyODMxZS5wbmciLCJ3aWR0aCI6Ijw9NDQ3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.8iUZnGNYiN_r98qF30guk7uhvGICVT2sqyj0ezTUETo',
      age: 16,
      note: 'Count on Raphael to throw the first punch',
    },
  ]);

  return (
    <div className="App">
      <h1>Seznam Ninja želv</h1>
      <List turtles={turtles} />
      <AddToList turtles={turtles} setTurtles={setTurtles} />
    </div>
  );
}

export default App;
