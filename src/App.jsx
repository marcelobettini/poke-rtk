import React, { useState, useEffect } from "react";
import PokemonContext from "./PokemonContext";
import PokemonTable from "./components/PokemonTable";
import PokemonRow from "./components/PokemonRow";
import PokemonFilter from "./components/PokemonFilter";
import PokemonInfo from "./components/PokemonInfo";

import "./App.css";



function App() {
  //todo este estado lo pasaremos a través del Context.Provider en el código jsx
  const [data, setData] = useState([])
  const [filter, setFilter] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  //con Vite basta con poner el archivo en la carpeta exterior, con webpack habría que incluirla en la carpeta public
  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  if (!data) {
    return <div>Fetching Pokemons...</div>;
  }
  return (
    <PokemonContext.Provider value={{
      data, setData, filter, setFilter, selectedPokemon, setSelectedPokemon
    }
    }>
      <div
        style={{
          margin: "auto",
          width: 800,
          paddingTop: "1rem",
        }}
      >
        <h1 className="title">Pokemon Search</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "80% 20%",
            gridColumnGap: "3rem",
          }}
        >
          <div>
            <PokemonFilter />
            <PokemonTable />

          </div>
          {/* solo si hay un selectedPokemon vamos a mostrar el componente */}
          {selectedPokemon && <PokemonInfo {...selectedPokemon} />}
        </div>
      </div >
    </PokemonContext.Provider >

  );
}

export default App;