import React from 'react';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="h-full w-full bg-gradient-to-b from-[#FFFDE4] to-[#005AA7]">
      <main className="container mx-auto">
        <ProductList />
      </main>
    </div>
  );
}

export default App;
