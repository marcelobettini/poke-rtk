import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/pokemonSlice";
const PokemonFilter = () => {
    const dispatch = useDispatch()
    return < TextField
        sx={{ width: '20ch' }}
        label="Search..." variant="filled"
        onChange={(e) => dispatch(setFilter(e.target.value)
        )
        }
    />
}
export default PokemonFilter

