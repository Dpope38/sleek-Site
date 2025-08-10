import React from "react";

function Modal({ onClose, desc, children, className }) {
  return (
    <div className={className} onClick={() => onClose(false)}>
      <p className=" text-2xl text-cyan-600 font-stretch-95%  mb-2 font-semibold">
        {desc}
      </p>
      {children}
    </div>
  );
}

export default Modal;
