import React from "react";

function Modal({ onClose, desc, children, ...props }) {
  return (
    <div
      className={`w-[50%] relative flex flex-col  ${props}`}
      onClick={() => onClose(false)}
    >
      <p className=" text-2xl text-cyan-600 font-stretch-95%  mb-2 font-semibold">
        {desc}
      </p>
      {children}
    </div>
  );
}

export default Modal;
