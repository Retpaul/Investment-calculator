import React from "react";
import "../index.css";

export default function Input({ children, type, id }) {
  return (
    
      <div>
        <label htmlFor={id}>{children}</label>
        <input type={type} id={id} />
      </div>
    
  );
}
