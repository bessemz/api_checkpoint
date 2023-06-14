import React from 'react';
import Profil from './components/Profil';
import './App.css';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>


     <Profil/>
    </div>
  );
}

export default App;
