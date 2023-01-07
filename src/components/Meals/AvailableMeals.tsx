import React from 'react';
import { Meal } from '../../models/Meal';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS: Meal[] = [
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
  const mealsList = DUMMY_MEALS.map((x) => <MealItem key={x.id} meal={x} />);

  return (
    <section className="my-8 mx-auto w-11/12 max-w-5xl">
      <Card>
        <ul className="m-0 list-none p-0">{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
