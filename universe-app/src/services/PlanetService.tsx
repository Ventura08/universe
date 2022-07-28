import { Planets } from "../interfaces";
import { Api } from "../providers"

const getAll = () => Api.get<{bodies: Planets[]}>('https://api.le-systeme-solaire.net/rest/bodies');

export const PlanetService = {
    getAll,
}