import { MyProfile } from "../../../widgets/myProfile/ui"
import { MatchCard } from "../../../widgets/matchCard/ui"

export default function Profile() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <MyProfile />
      <MatchCard />
      {/* {matches && user && matches.map((match, index) => (
        <Matchcard
          key={index}
          id={match}
          index={index}
          myPuuid={user?.puuid}
        />
      ))} */}
    </div>
  )
}

