export const pokemons = [
    {
        name: 'Pikachu',
        type: 'electric',
        hp: 274,
        img: './assets/pikachu.png',
        attacks: [
            {
                name: "thunder jolt",
                maxDamage: 40,
                minDamage: 20,
                maxCount: 100,
            },
            {
                name: "electro ball",
                maxDamage: 60,
                minDamage: 45,
                maxCount: 6,
            },
            {
                name: "volt tackle",
                maxDamage: 75,
                minDamage: 60,
                maxCount: 4,
            },
            {
                name: "thunder crack",
                maxDamage: 160,
                minDamage: 130,
                maxCount: 2,
            }
        ]
    },
    {
        img: './assets/Charmander.png',
        name: 'Charmander',
        type: 'fire',
        hp: 282,
        attacks: [
            {
                name: "ember",
                maxDamage: 40,
                minDamage: 20,
                maxCount: 100,
            },
            {
                name: "flamethrower",
                maxDamage: 60,
                minDamage: 45,
                maxCount: 6,
            },
            {
                name: "burning tail",
                maxDamage: 75,
                minDamage: 60,
                maxCount: 4,
            },
            {
                name: "fire spin",
                maxDamage: 130,
                minDamage: 110,
                maxCount: 2,
            }
        ]
    }
];