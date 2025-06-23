import { useQuery } from "@tanstack/react-query";
import { ChampCard } from "../../../widgets/champCard/ui";
import { getChampData, getChampProfile } from "../api";
import type { Champion } from "../model";

export default function Champions() {
	const { data: champions } = useQuery({
		queryKey: ["champions"],
		queryFn: getChampData,
		staleTime: 1000 * 60 * 5,
	});

	const championsArray = champions?.data ? Object.values(champions.data) : [];

	return (
		<div className="flex flex-col justify-center items-center text-white font-medium">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-4">
				{championsArray.map((champion: Champion) => (
					<ChampCard
						key={champion.key}
						name={champion.name}
						splashImage={getChampProfile(champion.id)}
						id={champion.id}
					/>
				))}
			</div>
		</div>
	);
}
