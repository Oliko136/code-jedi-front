import React from 'react';

const Burger = ({ width, height, fillColor, fillStroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fillColor}
      stroke={fillStroke}
      viewBox="0 0 1024 1024"
    >
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="85.3333"
        d="M128 512h768"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="85.3333"
        d="M128 256h768"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="85.3333"
        d="M128 768h768"
      ></path>
    </svg>
  );
};

export default Burger;
