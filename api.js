import fetch from "node-fetch";

export async function getPlanets() {
    const res = await fetch("https://api.le-systeme-solaire.net/rest/bodies");
    const json = await res.json();
    console.log(json);
    return json;
}



