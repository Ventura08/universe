import fs from 'fs';

export async function getData() {
   const response = await fs.readFileSync('server/models/database/moons.json');
   return (response.length == 0) ? [] : (await JSON.parse(response));
}

export async function insertData(data) {
    return await fs.writeFileSync('server/models/database/moons.json', JSON.stringify(data, null, 4));
}