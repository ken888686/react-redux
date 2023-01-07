import React from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#FFFDE4] to-[#11998e]">
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
