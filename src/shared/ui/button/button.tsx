import { useMemo } from "react";

interface ButtonProps {
  label: string;
  isActive?: boolean;
  variant: "primary" | "secondary";
  type?: "button" | "submit"
  onClick?: () => void;
}

export const Button = ({ label, isActive = false, variant, type = "button", onClick }: ButtonProps) => {
  const buttonStyle = useMemo(() => {
    const primary = isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500";
    const secondary = isActive ? "border-blue-400 text-blue-400" : "border-gray-300 text-gray-800";

    return `${variant == "primary" ? primary : secondary}`;
  }, [isActive, variant]);

  return (
    <button
      className={`flex py-2 px-3 border justify-center items-center self-stretch rounded-[0.75rem] font-bold cursor-pointer ${buttonStyle}`}
      disabled={!isActive && type == "submit"}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

