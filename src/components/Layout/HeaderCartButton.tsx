import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

type HeaderCartButtonProps = {
  onClick: () => void;
};

function HeaderCartButton({ onClick }: HeaderCartButtonProps) {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce(
    (prev, curr, index, item) => curr + item.amount,
    0,
  );

  return (
    <button
      type="button"
      className="group flex cursor-pointer items-center justify-around rounded-3xl bg-[#4d1601] py-3 px-12 font-bold text-white hover:bg-[#2c0d00] active:bg-[#2c0d00]"
      onClick={() => onClick()}
    >
      <span className="mr-2 h-5 w-5">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="ml-4 rounded-3xl bg-[#b94517] py-1 px-4 font-bold group-hover:bg-[#92320c] group-active:bg-[#92320c]">
        {numberOfCartItems}
      </span>
    </button>
  );
}

export default HeaderCartButton;
