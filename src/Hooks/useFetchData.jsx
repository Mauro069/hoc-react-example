import { useEffect, useState } from "react";

export const useFetchData = (urls) => {
  const [data, setData] = useState({});

  const fetchData = () =>
    urls?.map(async ({ url, name }) => {
      let dataFetched = await fetch(url).then((resp) => resp.json());

      setData((prevState) => {
        return {
          ...prevState,
          [name]: dataFetched,
        };
      });
    });

  useEffect(() => {
    fetchData();
  }, []);

  return { data };
};
