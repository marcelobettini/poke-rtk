//recibe el nombre (versión english) y el objeto base, que tiene los atributos de pelea
//si pasamos name, luego el <h2> es name.english

import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";
const PokemonInfo = ({ name: { english }, base, onDismiss }) => (
    <Card sx={{ height: 350, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
        <CardContent>

            <Typography variant="h5" gutterBottom>{english}</Typography>
            {/* Object.keys toma un objeto y retorna un arreglo con todas las keys (hp, attack, defense...). Vamos luego a apilar un map, que por cada elemento del arreglo, o sea, cada key, genere una table row con dos table data (key y valor) por ej: HP:75... etc  */}
            {Object.keys(base).map((key) => (
                <Typography key={key}>{key} : {base[key]}</Typography>
            ))}
        </CardContent>
        <CardActions>
            <Button variant="contained" color="secondary" onClick={() => onDismiss()}>dismiss</Button>
        </CardActions>
    </Card>
);

export default PokemonInfo