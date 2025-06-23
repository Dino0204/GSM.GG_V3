import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { ChampCard } from "../../../widgets/champCard/ui";
import { getChampData, getChampProfile } from "../api";

interface Champion {
	key: number;
	name: string;
	id: string;
}

export default function Champions() {
	const { data, error, isFetching } = useQuery({
		queryKey: ["champions"],
		queryFn: getChampData,
		staleTime: 1000 * 60 * 5,
	});

	const champions: Champion[] = useMemo(() => {
		return data ? Object.values(data?.data.data) : [];
	}, [data]);

	return (
		<div className="flex flex-col justify-center items-center text-white font-medium">
			{champions?.map((champion: Champion) => (
				<ChampCard
					key={champion?.key}
					name={champion?.name}
					splashImage={getChampProfile(champion?.id)}
					id={champion?.id}
				/>
			))}
		</div>
	);
}
