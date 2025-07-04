import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChampDetails, getChampSkin } from "../../../widgets/detailCard/api";
import { Detailcard } from "../../../widgets/detailCard/ui";
import type { Skin, Style } from "../model";

export default function Detail() {
	const { id } = useParams<string>();
	const [style, setStyle] = useState<Style>();
	const [currentImgIndex, setCurrentImgIndex] = useState(1);

	const {
		data: championData,
		isFetching,
		isLoading,
	} = useQuery({
		queryKey: ["champion", id],
		queryFn: () => getChampDetails(String(id)),
		enabled: !!id,
		staleTime: 1000 * 10,
	});

	useEffect(() => {
		setStyle({
			transform: `translateX(0%)`,
			transition: "none",
		});
	}, []);

	if (id === undefined) return <small>존재하지 않는 챔피언입니다.</small>;

	const champion = championData?.data[id];

	const nextSlide = () => {
		const newIndex =
			currentImgIndex === champion?.skins.length - 1 ? 0 : currentImgIndex + 1;
		setCurrentImgIndex(newIndex);
		setStyle({
			transform: `translateX(-${newIndex}00%)`,
			transition: `all 0.4s ease-in-out`,
		});
	};

	const prevSlide = () => {
		const newIndex =
			currentImgIndex === 0 ? champion?.skins.length - 1 : currentImgIndex - 1;
		setCurrentImgIndex(newIndex);
		setStyle({
			transform: `translateX(-${newIndex}00%)`,
			transition: `all 0.4s ease-in-out`,
		});
	};

	if (isLoading || isFetching) {
		return (
			<div className="font-bold text-center text-2xl text-white">
				Loading...
			</div>
		);
	}

	return (
		<div className="flex justify-center text-white">
			<div className="relative">
				<div className="overflow-hidden w-full max-w-80">
					<div className="flex" style={style}>
						{champion?.skins.map((skin: Skin) => (
							<Detailcard
								key={skin.id}
								name={skin.name === "default" ? "기본 스킨" : skin.name}
								splashImage={getChampSkin(id, skin.num)}
							/>
						))}
					</div>
				</div>
				<div className="absolute w-full flex justify-between top-1/2">
					<button
						type="button"
						className="text-white text-2xl cursor-pointer"
						onClick={prevSlide}
					>
						{"◁"}
					</button>
					<button
						type="button"
						className="text-white text-2xl cursor-pointer"
						onClick={nextSlide}
					>
						{"▷"}
					</button>
				</div>
			</div>
		</div>
	);
}
