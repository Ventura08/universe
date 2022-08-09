import { getData, insertData } from "../models/moon.js";

export async function deleteMoon(id) {
    const dataCurrent = await getData();
    const newData = removeMoons(id, dataCurrent);
    insertData(newData);
}

function removeMoons(id, data) {
    return { moons: data.moons.filter((item) => id != item.id) };
}

export async function createMoon(item) {
    const dataCurrent = await getData();
    const newData = addMoon(item, dataCurrent);
    insertData(newData);
}

function addMoon(item, data) {
    let datanew = data.moons;
    datanew.push(item);
    return { moons: datanew };
}


export async function updateMoon(item, id) {
    const dataCurrent = await getData();
    dataCurrent.moons[id - 1] = item
    insertData(dataCurrent);
}



