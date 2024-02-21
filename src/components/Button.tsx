/** @format */
"use client";
import React from "react";
import { IconType } from "react-icons";

type ButtonType = "submit" | "reset" | "button" | undefined ;

interface ButtonProps {
	label: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	outline?: boolean;
	small?: boolean;
	icon?: IconType;
	type: ButtonType;
}
const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	disabled,
	outline,
	small,
	icon: Icon,
	type
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			type={type}
			className={`
			class-button
      ${outline ? "background-white" : "background-green"}
      ${outline ? "border-black" : "background-green"}
      ${small ? "text-small" : "text-med"}
      ${small ? "font-light" : "font-semibold"}
      ${small ? "border-[1px]" : "border-2"}
      `}>
			{label} {Icon && <Icon size={24} className='absolute left-4 top-3' />}
		</button>
	);
};

export default Button;
