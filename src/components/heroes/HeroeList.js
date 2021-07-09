import React, {useMemo} from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroByPublisher";
import { HeroeCard } from "./HeroeCard";
import "./HeroeList.css";

export const HeroeList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
  return (
    <div className="card-columns card__style animate__animated animate__fadeInLeft">
      {heroes.map((hero) => (
        <HeroeCard key={hero.id} {...hero}></HeroeCard>
      ))}
    </div>
  );
};
