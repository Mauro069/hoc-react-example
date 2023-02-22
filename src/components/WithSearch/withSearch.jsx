import { useState } from "react";
import SearchBar from "./components/SearchBar";

export const withSearchBar = (Component, data, keys) => {
  return function () {
    const [query, setQuery] = useState("");

    // Con esta función matcheamos con las keys que le pasamos
    // por ejemplo: si pasamos estas keys ["name", "phone", "email"]
    // la funcion hace lo siguiente si la query es = "Leanne"
    // keys.some((key) => item["name"].toLowerCase().includes(query))
    // keys.some((key) => item["phone"].toLowerCase().includes(query))
    // keys.some((key) => item["email"].toLowerCase().includes(query))
    // esto devuelve los usuarios
    // que en la prop item.name || item.phone || item.email
    // contengan "leanne"

    const search = (dataSearch) => {
      return dataSearch.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(query))
      );
    };

    return (
      data && (
        <>
          <SearchBar setQuery={setQuery} />
          <Component dataList={search(data)} />
        </>
      )
    );
  };
};
