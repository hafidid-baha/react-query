import React, { useState } from "react";
import { useQuery } from "react-query";
import { Character } from "./Character";
export const Characters = () => {
  const [page, setPage] = useState(1);
  // const [characters, setCharacters] = useState([]);
  const fetchCharacters = async ({ queryKey }) => {
    // console.log(queryKey);
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return res.json();
    // setCharacters(data.results);
    // console.log(characters.results[0].name);
  };
  const { data, status } = useQuery(["characters", page], fetchCharacters);
  // useEffect(() => {
  //   fetchCharacters();
  // }, []);
  if (status === "loading") {
    return <div>loading ...</div>;
  }
  if (status === "error") {
    return <div>Error ...</div>;
  }
  return (
    <div className="container text-center">
      {data.results.map((c) => {
        return <Character character={c} />;
      })}
      <div>
        <button
          className="btn btn-primary m-1"
          disabled={page === 1}
          onClick={() => setPage((old) => old - 1)}
        >
          previews
        </button>
        <button
          className="btn btn-primary m-1"
          disabled={!data.info.next}
          onClick={() => setPage((old) => old + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};
