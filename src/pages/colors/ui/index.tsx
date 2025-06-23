export default function Colors() {
	const styles = "rounded-full ";

	return (
		<div className="flex items-center justify-center p-5 ">
			<div className="flex gap-5 bg-white p-5 rounded-2xl">
				<section className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold text-center">Primary</h1>
					<div className={`${styles} bg-primary-100`}>#CADEFA</div>
					<div className={`${styles} bg-primary-200`}>#3A8BFE</div>
					<div className={`${styles} bg-primary-300`}>#6983E0</div>
					<div className={`${styles} bg-primary-400`}>#2D344C</div>
				</section>
				<section className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold text-center">Base</h1>
					<div className={`${styles} bg-base-100`}>#D9D9D9</div>
					<div className={`${styles} bg-base-200`}>#9C9C9C</div>
					<div className={`${styles} bg-base-300`}>#1F2937</div>
					<div className={`${styles} bg-base-400`}>#111827</div>
				</section>
				<section className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold text-center">Secondary</h1>
					<div className={`${styles} bg-secondary-100`}>#E06969</div>
					<div className={`${styles} bg-secondary-200`}>#4C2D2D</div>
				</section>
			</div>
		</div>
	);
}
