import React from 'react';
import { Meal } from '../../../models/Meal';
import MealItemForm from './MealItemForm';

type MealItemProps = {
  meal: Meal;
};

function MealItem({ meal: { id, name, description, price } }: MealItemProps) {
  return (
    <li className="m-4 flex justify-between border-b border-b-[#ccc] pb-4">
      <div>
        <h3 className="ml-1">{name}</h3>
        <div className="italic">{description}</div>
        <div className="mt-1 text-xl font-bold text-[#ad5502]">{`$${price}`}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
}

export default MealItem;
