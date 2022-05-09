import PokemonContext from "../PokemonContext";
import { useContext } from "react";
import { TextField } from "@mui/material";

const PokemonFilter = () => {
    //atención, no es un array sino un objeto
    const { filter, setFilter } = useContext(PokemonContext)

    return < TextField
        label="Search..." variant="filled"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
    />
}

export default PokemonFilter

