import React from 'react';
import './input.css';

export default function Input({
  type,
  placeholder,
  onChange,
  value,
  accept,
  className,
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        accept={accept}
        className={`inpute ${className}`}  
        />
    </>
  );
}
