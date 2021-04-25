import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/actions";

export default function Characters() {
  const dispatch = useDispatch();
  let char = useSelector((state) => state.star_wars.characters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  const renderList = () => {
    return (
      <>
        <div>
          {char.map((d) => (
            <li key={d.name}>{d.name}</li>
          ))}
        </div>
      </>
    );
  };

  return <div>{renderList()}</div>;
}
