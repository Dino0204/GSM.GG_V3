interface InputProps {
	label: string;
	type?: "text" | "password" | "email";
	value: string;
	name: string;
	error?: string;
	placeHolder?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
	label,
	type = "text",
	name,
	value,
	error,
	placeHolder,
	onChange,
}: InputProps) => {
	return (
		<div className="flex flex-col w-full">
			<label htmlFor={name} className="text-black font-normal">
				{label}
			</label>
			<input
				type={type}
				value={value}
				name={name}
				placeholder={placeHolder}
				onChange={onChange}
				className="p-[0.75rem] rounded-[0.5rem] border bg-white outline-main-500"
			/>
			<small role="alert" className="text-red-500">
				{error}
			</small>
		</div>
	);
};
