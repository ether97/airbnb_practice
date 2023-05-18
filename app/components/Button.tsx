"use client";

import { IconType } from "react-icons/lib";

interface ButtonProps {
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
  outline?: boolean;
  color: string;
  label: string;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  small,
  outline,
  color,
  label,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
      ${outline ? `bg-white` : `bg-${color}`} 
      ${outline ? "text-black" : "text-white"} 
      ${outline ? `border-black` : `border-${color}`} 
      hover:opacity-80
      transition
      relative
      rounded-lg
      w-full
      disabled:cursor-not-allowed
      disabled:opacity-70
      ${small ? "text-sm" : "text-md"}
      ${small ? "font-light" : "font-semibold"}
      ${small ? "py-1" : "py-3"}
      ${small ? "border-[1px]" : "border-2"}
      `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
