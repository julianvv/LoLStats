let express = require('express');
let app = express();

let axios = require('axios');

const LoL = axios.create({
    timeout: 1000,
    responseType: 'json',
    headers: {
        "X-Riot-Token": process.env.RIOT_TOKEN
   }
});

app.get('/champion-rotations', async function (req, res) {
    await LoL({
        url: "https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations",
    }).then(lol => {
        // champs = data.json();
        res.send(lol.data);
    }).catch(err => {
        res.send(err);
    });
});

module.exports = {
    path: "/api",
    handler: app
}