import React from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#FFFDE4] to-[#005AA7]">
      {/* <main className="container mx-auto flex h-full w-full items-center justify-center">
        <span className="inline-block rounded-xl bg-transparent/10 p-10 shadow-xl transition-all hover:cursor-pointer hover:shadow-lg">
          Hi
        </span>
      </main> */}
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
