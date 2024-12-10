const express = require('express')
const app = express()

let spaceData = {
    planets: [
        {
            name: "Mercury",
            distance_from_sun_km: 57900000,
            diameter_km: 4879,
            moons: 0
        },
        {
            name: "Venus",
            distance_from_sun_km: 108200000,
            diameter_km: 12104,
            moons: 0
        },
        {
            name: "Earth",
            distance_from_sun_km: 149600000,
            diameter_km: 12742,
            moons: 1
        },
        {
            name: "Mars",
            distance_from_sun_km: 227900000,
            diameter_km: 6779,
            moons: 2
        },
        {
            name: "Jupiter",
            distance_from_sun_km: 778500000,
            diameter_km: 139820,
            moons: 95
        },
        {
            name: "Saturn",
            distance_from_sun_km: 1433000000,
            diameter_km: 116460,
            moons: 146
        },
        {
            name: "Uranus",
            distance_from_sun_km: 2871000000,
            diameter_km: 50724,
            moons: 27
        },
        {
            name: "Neptune",
            distance_from_sun_km: 4495000000,
            diameter_km: 49244,
            moons: 14
        }
    ],
    astronauts_in_space: {
        total: 10,
        locations: [
            {
                station: "International Space Station",
                astronauts: [
                    "Sunita Williams",
                    "Barry Wilmore",
                    "Donald Pettit",
                    "Alexey Ovchinin",
                    "Ivan Vagner",
                    "Aleksandr Gorbunov",
                    "Tyler Hague"
                ]
            },
            {
                station: "Tiangong Space Station",
                astronauts: [
                    "Cai Xuzhe",
                    "Song Lingdong",
                    "Wang Haoze"
                ]
            }
        ]
    }
}


// INSTRUCTIONS: Set up the code that does the following
// - console logs the method and URL for every request
// - sends back "Welcome to the Space API" as an h1 when the client goes to /
// - sends back the earth object when the client goes to /earth
// - sends back the astronauts_in_space object when the client goes to /space
// - sends back a 404 page for all other paths





app.listen(3000, () => {
    console.log("Server running")
})