import React from 'react';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((x) => <li key={x.id}>{x.name}</li>);

  return (
    <section className="my-8 mx-auto w-11/12 max-w-5xl">
      <ul className="m-0 list-none p-0">{mealsList}</ul>
    </section>
  );
}

export default AvailableMeals;
