import React from 'react';
import Input from '../../UI/Input';

type MealItemFormProps = {
  id: string;
};

function MealItemForm({ id }: MealItemFormProps) {
  return (
    <form action="" className="text-right">
      <Input
        label="Amount"
        input={{
          id: `amount_${id}`,
          any: {
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
          },
        }}
      />
      <button
        type="button"
        className="cursor-pointer rounded-[20px] border border-[#8a2b06] bg-[#8a2b06] py-1 px-8 font-bold text-white hover:border-[#641e03] hover:bg-[#641e03] active:border-[#641e03] active:bg-[#641e03]"
      >
        + Add
      </button>
    </form>
  );
}

export default MealItemForm;
