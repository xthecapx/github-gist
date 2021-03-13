import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
