import React from 'react';
import Modal from '../UI/Modal';

type CartProps = {};

function Cart() {
  const cartItems = (
    <ul>
      {[{ id: 'c1', name: 'AAA', amount: 3, price: 2300 }].map((x) => (
        <li key={x.id}>{x.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className="my-4 mx-0 flex items-center justify-between text-2xl font-bold">
        <span>Total amount</span>
        <span>35.6</span>
      </div>
      <div className="text-right">
        <button
          type="button"
          className="ml-4 cursor-pointer rounded-[25px] border border-[#8a2b06] bg-transparent py-2 px-8 text-[#8a2b06] hover:border-[#5a1a01] hover:bg-[#5a1a01] hover:text-white active:border-[#5a1a01] active:bg-[#5a1a01] active:text-white"
        >
          Close
        </button>
        <button
          type="button"
          className="ml-4 cursor-pointer rounded-[25px] border border-[#8a2b06] bg-[#8a2b06] py-2 px-8 text-white hover:border-[#5a1a01] hover:bg-[#5a1a01] hover:text-white active:border-[#5a1a01] active:bg-[#5a1a01] active:text-white"
        >
          Order
        </button>
      </div>
    </Modal>
  );
}

export default Cart;
