import { useState, useEffect } from "react";
import CardList from "./components/card-list/car-list.component";
import SearchBar from "./components/search-bar/search-bar.component";

import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setfilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responce) => responce.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    setfilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value;
    setSearchField(searchFieldString);
  };
  return (
    <div className="App">
      <h2 className="monster-title">Monsters Rolodex</h2>
      <SearchBar
        className="search-box"
        type="search"
        placeholder="Filter Monsters..."
        onChangeHandler={onSearchChange}
      />
      <CardList filteredMonsters={filteredMonsters} />
    </div>
  );
};

export default App;
