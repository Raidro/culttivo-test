import { useState, useEffect } from "react";
import "./App.css";
import { getAllCharacters } from "./api/marvel-api";
import ListAllCaractersScreen from "./screens/ListCharactersComponent";

function App() {
  const [characterList, setCaracterList] = useState();
  const [page, setPage] = useState(0);
  const [offSet, setOffset] = useState(1);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    async function fetchListCharacts() {
      const infos = await getAllCharacters({ offSet: offSet });
      setCaracterList(infos.data.results);
      setPage(infos.data.count);
      setOffset(infos.data.offSet);
      setTotal(infos.data.total);
    }
    fetchListCharacts();
  }, [offSet, setOffset]);

  return (
    characterList && (
      <ListAllCaractersScreen
        data={characterList}
        page={page}
        defaultPage={offSet}
        total={total}
        setPage={setOffset}
      />
    )
  );
}

export default App;
