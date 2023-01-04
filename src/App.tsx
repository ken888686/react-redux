import React from 'react';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-gray-500 to-black">
      <main className="container mx-auto">
        <ExpenseItem />
      </main>
    </div>
  );
}

export default App;
