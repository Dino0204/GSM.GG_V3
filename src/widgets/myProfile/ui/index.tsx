import { Button } from "@/components/ui/button";

export const MyProfile = () => {
	return (
		<div className="flex w-[46.875rem] h-[15rem] p-[1.25rem] items-center gap-[2rem] rounded-[1.875rem] border-[5px] bg-white">
			<img
				className="w-[12.5rem] h-[12.5rem] rounded-[0.9375rem] border-primary-200"
				src="../public/image 10.png"
				alt="profile"
			/>
			<div className="flex flex-col w-[28.125rem] h-[12.5rem] items-start gap-[0.4375rem]">
				<section className="flex w-full justify-between">
					<h1 className="font-black text-[2.25rem]">의문의 그웬 장인</h1>
					<h2 className="font-[600] text-[2.25rem] text-base-200">#싹둑싹둑</h2>
				</section>
				<section className="flex">
					<div className="w-[6.25rem] h-[6.25rem] bg-base-300 border-[5px] border-black rounded-full"></div>
					<div>
						<h2 className="text-[2rem] font-black">Master</h2>
						<h3 className="text-[1.25rem] font-extrabold text-base-200">
							575LP
						</h3>
					</div>
					<Button variant="default">전적 갱신</Button>
				</section>
			</div>
		</div>
	);
};
