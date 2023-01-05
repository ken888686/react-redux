import React from 'react';
import moment from 'moment';

interface IProp {
  expenseAmount: number;
  expenseDate: string;
  expenseTitle: string;
}

function ExpenseItem({ expenseAmount, expenseDate, expenseTitle }: IProp) {
  const amount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'JPY',
  }).format(expenseAmount);
  const date = moment(expenseDate);

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl bg-transparent/30 py-3 px-3 shadow-lg">
      <div>{date.format('YYYY MMM DD')}</div>
      <div className="flex flex-1 items-center justify-between text-lg font-bold text-white">
        <h2 className="">{expenseTitle}</h2>
        <div className="rounded-lg border border-white bg-purple-900 py-2 px-5">{`${amount}`}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
