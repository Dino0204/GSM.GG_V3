import { useMemo } from "react";

interface ButtonProps {
  label: string;
  isActive?: boolean;
  variant: "blue";
  onClick?: () => void;
}

export const Button = ({ label, isActive = false, variant, onClick }: ButtonProps) => {
  const buttonStyle = useMemo(() => {

  }, [isActive, variant]);

  return (
    <button
      className={`flex py-[1.31rem] px-[1rem] font-extrabold text-[2rem] text-white justify-center items-center rounded-[0.625rem] bg-primary-200 cursor-pointer ${buttonStyle}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

