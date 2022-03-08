import { useEffect, useState } from "react";
import { IPokemon } from "../types/Pokemon";
import FastAverageColor from "fast-average-color";
import { useParams } from "react-router-dom";

export const useFetchPokemon = () => {
  const [data, setData] = useState<IPokemon[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const pid = useParams().pid;

  //SETUP FETCH
  useEffect(() => {
    setLoading(true);
    const url = "https://pokeapi.co/api/v2/pokemon/";

    if (!pid) {
      for (let i = 1; i <= 152; i++) {
        fetchPoke(url + i);
      }
    } else {
      fetchPoke(url + pid);
    }
    setLoading(false);
  }, [pid]);

  //FETCH DATA
  const fetchPoke = (fullUrl: string) => {
    fetch(fullUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong");
      })
      .then((resJson) => {
        const fac = new FastAverageColor();

        fac.getColorAsync(resJson.sprites.front_default).then((color) => {
          const meta = {
            ...resJson,
            backgroundColor: color.hex,
          };

          setData((prevState) => [...prevState, meta]);
        });
      })

      .catch((err) => setError(err));
  };

  return { data, error, loading };
};
