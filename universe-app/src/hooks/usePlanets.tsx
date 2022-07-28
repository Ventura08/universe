import { useCallback, useState } from "react"
import { Planets } from "../interfaces";
import { PlanetService } from "../services/PlanetService";


export const usePlanets = () => {
    const [planets, setPlanets] = useState<{bodies: Planets[]}>();

    const getAll = useCallback(async () => {
        const {status, data} = await PlanetService.getAll();

        if(status !== 200) throw new Error();

        setPlanets(data);
    }, []);

    return{
        planets,
        getAll
    }
}