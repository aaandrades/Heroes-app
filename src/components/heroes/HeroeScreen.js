import React from "react";
import { useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";
import { Redirect } from "react-router-dom";

export const HeroeScreen = ({ history }) => {
  const { heroeid: heroeId } = useParams();

  const hero = getHeroById(heroeId);

  if (!hero.length) return <Redirect to="/" />;

  const handleReturn = () =>
    history.length >= 2 ? history.goBack() : history.push("/");

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero[0];

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__bounceInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {alter_ego}
            <hr />
            <b>Publisher: </b>
            {publisher}
            <hr />
            <b>First Appearence: </b>
            {first_appearance}
            <hr />
          </li>
        </ul>
        <h5> Characters </h5>
        <p> {characters} </p>
        <button className="btn btn-primary" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
