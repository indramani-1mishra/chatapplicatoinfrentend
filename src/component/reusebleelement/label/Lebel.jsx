import React from 'react';
import './label.css'; // optional styling

export default function Label({ text, htmlFor, className }) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {text}
    </label>
  );
}
