import React from 'react';
import './App.css';
import PacksList from "./features/PacksList";
import GiftForm from "./features/GiftForm";

function App() {
  return (
    <div className="App">
        <PacksList/>
        <GiftForm/>
    </div>
  );
}

export default App;
