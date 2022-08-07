import { getData, insertData } from "../models/moon.js";

export async function deleteMoon(id) {
    const dataCurrent = await getData();
    const newData = removeMoons(id,dataCurrent);
    insertData(newData);
}

function removeMoons(id, data) {
    return { moons: data.moons.filter((item) => id != item.id) };
}



