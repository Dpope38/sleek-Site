import React from "react";

function Accordion({ title, children, ...props }) {
  return (
    <div {...props}>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}

export default Accordion;
