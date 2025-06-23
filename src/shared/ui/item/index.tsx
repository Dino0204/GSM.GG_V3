interface ItemProps {
	type: "skill" | "rune";
}

export const Item = ({ type }: ItemProps) => {
	return (
		<div
			className={`w-[1.5rem] h-[1.5rem] bg-base-200 ${type == "skill" ? "rounded-xs" : "rounded-full"} `}
		></div>
	);
};
