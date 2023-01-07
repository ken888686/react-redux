import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#FFFDE4] to-[#11998e]">
      {cartIsShown && <Cart onClose={() => hideCartHandler()} />}
      <Header onShowCart={() => showCartHandler()} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
