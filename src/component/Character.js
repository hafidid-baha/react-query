import React from "react";

export const Character = ({ character }) => {
  return (
    <div className="card d-inline-block m-2" style={{ width: "18rem" }}>
      <img src={character.image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">status : {character.status}</p>
        <p className="card-text">species : {character.species}</p>
        <p className="card-text">gender : {character.gender}</p>
      </div>
    </div>
  );
};
