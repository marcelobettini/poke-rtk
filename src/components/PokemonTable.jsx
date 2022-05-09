import React, { useContext } from "react";
import PokemonRow from "./PokemonRow";
import PokemonContext from "../PokemonContext";

function PokemonTable() {
    const { filter, data, setSelectedPokemon } = useContext(PokemonContext);
    return (
        <table width="100%">
            <tbody>
                {data
                    .filter(({ name: { english } }) =>
                        english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
                    )
                    .slice(0, 20)
                    .map((pokemon) => (
                        <PokemonRow
                            key={pokemon.id}
                            pokemon={pokemon}
                            onDetail={(pokemon) => setSelectedPokemon(pokemon)}
                        />
                    ))}
            </tbody>
        </table>
    );
}

export default PokemonTable;