const express = require('express')
const { nextTick } = require('process')
const app = express()

let spaceData = {
    planets: [
        {
            name: "Mercury",
            distance_from_sun_km: 57900000,
            diameter_km: 4879,
            moons: []
        },
        {
            name: "Venus",
            distance_from_sun_km: 108200000,
            diameter_km: 12104,
            moons: []
        },
        {
            name: "Earth",
            distance_from_sun_km: 149600000,
            diameter_km: 12742,
            moons: [
                {
                    name: "Moon",
                    diameter_km: 3474
                }
            ]
        },
        {
            name: "Mars",
            distance_from_sun_km: 227900000,
            diameter_km: 6779,
            moons: [
                {
                    name: "Phobos",
                    diameter_km: 22.4
                },
                {
                    name: "Deimos",
                    diameter_km: 12.4
                }
            ]
        },
        {
            name: "Jupiter",
            distance_from_sun_km: 778500000,
            diameter_km: 139820,
            moons: [
                {
                    name: "Io",
                    diameter_km: 3643
                },
                {
                    name: "Europa",
                    diameter_km: 3122
                }
                // Other moons omitted for brevity
            ]
        },
        {
            name: "Saturn",
            distance_from_sun_km: 1433000000,
            diameter_km: 116460,
            moons: [
                {
                    name: "Titan",
                    diameter_km: 5152
                },
                {
                    name: "Enceladus",
                    diameter_km: 504
                }
                // Other moons omitted for brevity
            ]
        },
        {
            name: "Uranus",
            distance_from_sun_km: 2871000000,
            diameter_km: 50724,
            moons: [
                {
                    name: "Titania",
                    diameter_km: 1578
                },
                {
                    name: "Oberon",
                    diameter_km: 1523
                }
                // Other moons omitted for brevity
            ]
        },
        {
            name: "Neptune",
            distance_from_sun_km: 4495000000,
            diameter_km: 49244,
            moons: [
                {
                    name: "Triton",
                    diameter_km: 2706
                }
                // Other moons omitted for brevity
            ]
        }
    ],
    stations: {
        "International Space Station": {
            astronauts: [
                {
                    name: "Sunita Williams",
                    nationality: "American",
                    missions: 2
                },
                {
                    name: "Barry Wilmore",
                    nationality: "American",
                    missions: 2
                },
                {
                    name: "Donald Pettit",
                    nationality: "American",
                    missions: 3
                },
                {
                    name: "Alexey Ovchinin",
                    nationality: "Russian",
                    missions: 3
                },
                {
                    name: "Ivan Vagner",
                    nationality: "Russian",
                    missions: 1
                },
                {
                    name: "Aleksandr Gorbunov",
                    nationality: "Russian",
                    missions: 1
                },
                {
                    name: "Tyler Hague",
                    nationality: "American",
                    missions: 1
                }
            ]
        },
        "Tiangong Space Station": {
            astronauts: [
                {
                    name: "Cai Xuzhe",
                    nationality: "Chinese",
                    missions: 1
                },
                {
                    name: "Song Lingdong",
                    nationality: "Chinese",
                    missions: 1
                },
                {
                    name: "Wang Haoze",
                    nationality: "Chinese",
                    missions: 1
                }
            ]
        },
        "Lunar Gateway": {
            astronauts: []
        },
        "Deep Space Habitat": {
            astronauts: []
        },
        "Bigelow Expandable Activity Module": {
            astronauts: []
        }
    }
}

// Review: add the code to log the method and URL of every request and set up the 404 page 
// Make sure to put them in the right place!


app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Space API</h1>")
})

// Code Along
// Set up the /planetsId/{id} path that sends back the planet object based on index
// e.g. /planets/0 sends back Mercury's object


// Set up the /stations/{stationName}/astronauts path that sends back the astronauts array for the given station
// e.g. /stations/International Space Station/astronauts sends back the astronauts on the ISS


// Set up the /planetsName/{name} path that sends back the planet based on NAME
// e.g. /planets/name/earth that sends back Earth's object
// Hint: You might need a for loop and if statements



// Coding Exercises
// 1. Set up /planets/{id}/moons path that sends back just the moons of the planet
// e.g. /planets/3/moons sends back Mars's moons array


// 2. Set up the /planets path that filters planets by a minimum diameter query parameter
// e.g. /planets?min_diameter=10000 sends back Venus, Earth, and others
// Hint: You will need to create an empty results array that you push valid planets to


// 3. Set up the /astronauts path that filters astronauts by nationality using a query parameter
// e.g. /astronauts?nationality=Russian sends back Russian astronauts only


// 4. Set up the /stations path that filters stations by minCount
// e.g. /stations?minCount=1 sends back stations with at least 1 astronaut


// Additional Tasks (might need to go in different places in the code)
// 5. Set up an authentication middleware that checks if the apiKey is se12rocks. Otherwise send back 401 not authorized
// 6. Merge the /planetsId/{id} and /planetsName/{name} routes to be one /planets/{id or name} path
// Hint: You need to check if you received an ID or name
// 7. Expand the /astronauts path to filter by number of missions as well



app.listen(3000, () => {
    console.log("Server running")
})