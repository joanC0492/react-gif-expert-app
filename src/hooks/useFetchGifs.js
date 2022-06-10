import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

function useFetchGifs(category) {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    // setTimeout(() => {
        getGifs(category)
          .then((img) => setState({ data: img, loading: false }))
          .catch(console.log);
    // }, 35000);
  }, [category]);

  return state;
}

export { useFetchGifs };
