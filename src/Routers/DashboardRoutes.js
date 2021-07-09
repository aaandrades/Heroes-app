import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroeScreen } from "../components/heroes/HeroeScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/NavBar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen}></Route>
          <Route exact path="/heroe/:heroeid" component={HeroeScreen}></Route>
          <Route exact path="/dc" component={DcScreen}></Route>
          <Route exact path="/search" component={SearchScreen}></Route>
          <Redirect to="/marvel"></Redirect>
        </Switch>
      </div>
    </>
  );
};
