import { useNavigate } from "react-router-dom";
import { Button } from "../../../shared/ui/button";

export const Header = () => {
	const go = useNavigate();

	return (
		<header className="h-[6.25rem]">
			<section className="flex items-center bg-base-300 p-2">
				<img
					src="./public/logo/GSM.GG Logo.svg"
					alt="logo"
					className="ml-2 cursor-pointer"
					onClick={() => go("/")}
				/>
			</section>
			<section className="flex items-center bg-primary-200 p-2 justify-between text-sm text-white font-bold ">
				<ul className="flex items-center gap-4 ">
					<li className="cursor-pointer" onClick={() => go("/champions")}>
						챔피언 분석
					</li>
					<li className="cursor-pointer" onClick={() => go("/colors")}>
						색상
					</li>
				</ul>
				<div className="flex items-center gap-2">
					{/* <Button variant="blue" label="로그인" onClick={() => go("/login")} /> */}
					<div
						className="flex items-center gap-2 cursor-pointer"
						onClick={() => go("/profile")}
					>
						프로필
						<img className="h-8" src="./public/profile.svg" alt="profile" />
					</div>
				</div>
			</section>
		</header>
	);
};
