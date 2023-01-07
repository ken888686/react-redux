import React from 'react';

type InputProps = {
  label: string;
  input: {
    id: string;
    any: any;
  };
};

function Input({ label, input }: InputProps) {
  return (
    <div className="mb-2 flex items-center">
      <label htmlFor={input.id} className="mr-4 font-bold">
        {label}
      </label>
      <input
        id={input.id}
        {...input.any}
        className="w-12 rounded-[5px] border border-[#ccc] pl-2"
      />
    </div>
  );
}

export default Input;
