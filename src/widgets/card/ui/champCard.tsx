import { useNavigate } from "react-router-dom";

interface ChampcardProps {
  id: string
  name: string,
  splashImage: string
}

export const ChampCard = ({ name, splashImage, id }: ChampcardProps) => {
  const go = useNavigate()

  return (
    <article
      className="flex items-center bg-gray-700 w-full p-1">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => go(id)}
      >
        <img
          className="rounded-sm"
          src={splashImage}
          alt={`${id} profile`}
          width={32}
          height={32}
        />
        <span>{name}</span>
      </div>
    </article>
  );
}