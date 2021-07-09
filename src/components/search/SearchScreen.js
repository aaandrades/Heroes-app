import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { HeroeCard } from "../../components/heroes/HeroeCard";
import queryString from "query-string";
import { heroes } from "../../data/heroes";

export const SearchScreen = ({ history }) => {
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [input, setInput] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    history.push("?q=" + input);
  };

  const heroesFiltered = heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().trim().includes(q)
  );

  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <button className="btn btn-primary mt-2" onClick={handleSearch}>
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {heroesFiltered.map((hero) => (
            <HeroeCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
