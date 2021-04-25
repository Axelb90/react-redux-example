import React from "react";
import { Route, Switch } from "react-router-dom";
import PageCard from "../components/PageCard";
import Characters from "./Characters";
import Movies from "../pages/Movies";
import Starships from "../pages/Starships";
import Vehicles from "../pages/Vehicles";
import { Center } from "@chakra-ui/react";

const navItems = [
  {
    id: 1,
    label: "Characters",
    url: "/characters",
  },
  {
    id: 2,
    label: "Movies",
    url: "/movies",
  },
  {
    id: 3,
    label: "Starships",
    url: "/starships",
  },
  {
    id: 4,
    label: "Vehicles",
    url: "/vehicles",
  },
];

const renderPageCards = () => {
  return navItems.map((item) => <PageCard key={item.id} navItem={item} />);
};

export default function Home() {
  return (
    <>
      <Center>{renderPageCards()}</Center>
      <Switch>
        <Route path="/characters" exact>
          <Characters />
        </Route>
        <Route path="/movies" exact>
          <Movies />
        </Route>
        <Route path="/starships" exact>
          <Starships />
        </Route>
        <Route path="/vehicles" exact>
          <Vehicles />
        </Route>
      </Switch>
    </>
  );
}
