import { getData, insertData } from "../models/moon.js";

export async function deleteMoon(id) {
    console.log(id)
    const dataCurrent = await getData();
    const newData = removeMoons(id, dataCurrent);
    insertData(newData);
}

function removeMoons(id, data) {
    return { moons: data.moons.filter((item) => id != item.id) };
}

export async function createMoon(item) {
    console.log(item);
    const dataCurrent = await getData();
    const newData = addMoon(item, dataCurrent);
    insertData(newData);
}

export async function updateMoon(item, id) {
    // console.log(Object.values(id) - 1);
    const dataCurrent = await getData();
    // console.log(typeof id)
    dataCurrent.moons[id - 1] = item
    insertData(dataCurrent);
}

function addMoon(item, data) {
    let datanew = data.moons;
    datanew.push(item);
    return { moons: datanew };
}

function findMoon(id, data) {
}



