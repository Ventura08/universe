import { Planets } from "../interfaces";
import { Moons } from "../interfaces/MoonsInterface";
import { Api } from "../providers"

//API PUBLIC
const getAll = () => Api.get<{bodies: Planets[]}>('https://api.le-systeme-solaire.net/rest/bodies');

//API INTERN
const getAllMoons = () => Api.get<Moons[]>('http://localhost:3001/moons');

export const PlanetService = {
    getAll,
    getAllMoons
}


