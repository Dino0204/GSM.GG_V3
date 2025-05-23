import { ChampCard } from "../../../widgets/champCard/ui";
import { useQuery } from "@tanstack/react-query";
import { getChampData, getChampProfile } from "../api";

export default function Champions() {
  const { data, error, isFetching } = useQuery({
    queryKey: ['champions'],
    queryFn: getChampData,
    staleTime: 1000 * 10
  })

  const champions = Object.values(data?.data?.data || {})

  return (
    <div className="flex flex-col justify-center items-center text-white font-medium">
      {champions.map((champion) =>
        <ChampCard
          key={champion?.key}
          name={champion?.name}
          splashImage={getChampProfile(champion?.id)}
          id={champion?.id}
        />
      )}
    </div>
  )
}

