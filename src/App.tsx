import React from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#FFFDE4] to-[#11998e]">
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
