import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

function Backdrop() {
  return <div className="fixed top-0 left-0 z-20 h-screen w-full bg-black/75" />;
}

function ModalOverlay({ children }: { children: ReactNode }) {
  return (
    <div className="fixed top-[20vh] left-[5%] z-30 w-[90%] rounded-[14px] bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
      <div className="">{children}</div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

function Modal({ children }: { children: ReactNode }) {
  return (
    <>
      {createPortal(<Backdrop />, portalElement!)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement!)}
    </>
  );
}

export default Modal;
