import { Item } from "../../../shared/ui/item";

export const MatchCard = () => {
	return (
		<div className="relative flex w-[46.875rem] h-[6.25rem] items-center gap-[0.625rem] bg-base-300 rounded-[0.3125rem] overflow-hidden">
			<div className="absolute left-0 w-[0.3125rem] h-full bg-base-200"></div>
			<div className="text-white text-[0.75rem font-extrabold]">
				<h1>개인/2인 랭크 게임</h1>
				<h2>N/A시간 전</h2>
				<h2>승리</h2>
				<h2>N/A분 N/A초</h2>
			</div>
			<section className="flex flex-col">
				<div className="flex">
					<div className="w-[3rem] h-[3rem] bg-base-200 rounded-full"></div>
					<div className="flex">
						<Item type="skill" />
						<Item type="skill" />
						<Item type="rune" />
						<Item type="rune" />
					</div>
					{/* <div className="flex text-white text-[1rem] font-black ">
            <p>0/</p>
            <p className="text-secondary-100">0</p>
            <p>/0</p>
          </div> */}
				</div>
				<div className="flex">
					<Item type="skill" />
					<Item type="skill" />
					<Item type="skill" />
					<Item type="skill" />
					<Item type="skill" />
					<Item type="skill" />
					<Item type="skill" />
				</div>
			</section>

			<div className="absolute left-1/2 w-[0.5px] h-[5rem] bg-base-200"></div>

			<section></section>

			<div className="absolute right-0 w-[1.5625rem] h-full bg-base-200"></div>
		</div>
	);
};
