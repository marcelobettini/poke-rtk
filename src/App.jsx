import React from "react";
import PokemonTable from "./components/PokemonTable";
import PokemonFilter from "./components/PokemonFilter";
import PokemonInfo from "./components/PokemonInfo";
import "./App.css";

function App() {
  return (

    <div style={{ margin: 'auto', display: "flex", flexDirection: "column", width: '60vw' }}>
      <h1>Pokemon Search</h1>
      <PokemonFilter />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
          marginTop: '2em',
          gap: "1.5rem",
        }}
      >
        <PokemonTable />
        <PokemonInfo />
      </div>
    </div >

  );
}
export default App;