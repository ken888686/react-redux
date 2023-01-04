import React from 'react';
import moment from 'moment';

function ExpenseItem() {
  const expenseDate = moment('2022-11-11');
  const expenseTitle = 'Car Insurance';
  const expenseAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'JPY',
  }).format(13200);

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl bg-transparent/30 py-3 px-3 shadow-lg">
      <div>{expenseDate.format('YYYY MMM DD')}</div>
      <div className="flex flex-1 items-center justify-between text-lg font-bold text-white">
        <h2 className="">{expenseTitle}</h2>
        <div className="rounded-lg border border-white bg-purple-900 py-2 px-5">
          {`${expenseAmount}`}
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
