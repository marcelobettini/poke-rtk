import PokemonRow from "./PokemonRow";
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"

import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/pokemonSlice"
import { useEffect } from "react";

function PokemonTable() {
    const { filter, data } = useSelector((state) => state.pokemon)
    const dispatch = useDispatch()
    useEffect(() => {
        fetch("http://localhost:3000/pokemon.json")
            .then((res) => res.json())
            .then((pokemon) => dispatch(setData(pokemon)))
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell >Name</TableCell>
                        <TableCell >Type</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data
                        .filter(({ name: { english } }) =>
                            english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
                        )
                        .slice(0, 6)
                        .map((pokemon) => (
                            <PokemonRow
                                key={pokemon.id}
                                pokemon={pokemon}
                            />
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PokemonTable;