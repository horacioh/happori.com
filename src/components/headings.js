import React from "react";

export function Heading1({ className, children, ...props }) {
  return (
    <h1
      className={`text-2xl md:text-5xl leading-snug font-bold ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}

export function Heading2({ className, children, ...props }) {
  return (
    <h2
      className={`text-xl md:text-3xl leading-snug font-bold ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}
