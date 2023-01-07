import React from 'react';
import mealsImage from '../../assets/header-bg.jpg';
import HeaderCartButton from './HeaderCartButton';

function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 z-10 flex h-20 w-full items-center justify-between bg-[#8a2b06] px-[10%] py-0 text-white shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className="z-0 h-[25rem] w-full overflow-hidden">
        <img
          className="h-full w-[110%] -translate-x-4 -translate-y-1/3 -rotate-6 scale-110 object-cover"
          src={mealsImage}
          alt="laptop on the table"
          srcSet=""
        />
      </div>
    </>
  );
}

export default Header;
