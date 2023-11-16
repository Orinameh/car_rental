"use client";

import Image from "next/image";

interface ButtonProps {
  text: string;
  isPrimary?: boolean;
  icon?: string;
  extraClass?: string;
}
export const Button = ({
  text,
  isPrimary = true,
  icon,
  extraClass,
}: ButtonProps) => {
  return (
    <button
      className={`${
        isPrimary ? "bg-primary text-lightText" : "bg-white"
      } outline-none text-xs py-2 px-4 rounded flex items-center gap-2 ${extraClass}`}
    >
      {icon && (
        <Image width={15} height={15} src={icon} alt={text} style={{objectFit: 'contain', width: '15px', height: '15px'}} />
      )}
      {text}
    </button>
  );
};
