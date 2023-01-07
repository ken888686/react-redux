import React, { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <div className="rounded-[14px] bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
      {children}
    </div>
  );
}

export default Card;
