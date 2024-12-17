const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
    const type1 = await prisma.type.create({
        data: {
            typeCarte: 'pokemon',
        },
    });
    const type2 = await prisma.type.create({
        data: {
            typeCarte: 'mtg',
        },
    });
    const type3 = await prisma.type.create({
        data: {
            typeCarte: 'ygo',
        },
    });
    const category1 = await prisma.categorie.create({
        data: {
            categoryName: 'Carte',
        },
    });
    const category2 = await prisma.categorie.create({
        data: {
            categoryName: 'Display',
        },
    });
    const category3 = await prisma.categorie.create({
        data: {
            categoryName: 'Deck',
        },
    });
    const category4 = await prisma.categorie.create({
        data: {
            categoryName: 'Boosters',
        },
    });

    // Pokémon cards
    await prisma.produit.createMany({
        data: [
            {
                name: 'Blastoise EX',
                imageURL: 'http://localhost:3000/images/images1.png',
                price: 75.99,
                typeId: type1.id,
                categorieId: category1.id,
            },
            {
                name: 'Charizard EX',
                imageURL: 'http://localhost:3000/images/images2.png',
                price: 89.99,
                typeId: type1.id,
                categorieId: category1.id,
            },
            {
                name: 'Mew EX',
                imageURL: 'http://localhost:3000/images/images3.png',
                price: 45.50,
                typeId: type1.id,
                categorieId: category1.id,
            },
            {
                name: 'Venusaur EX',
                imageURL: 'http://localhost:3000/images/images4.png',
                price: 29.99,
                typeId: type1.id,
                categorieId: category1.id,
            },
            {
                name: 'Pikachu FA',
                imageURL: 'http://localhost:3000/images/images5.png',
                price: 49.99,
                typeId: type1.id,
                categorieId: category1.id,
            },
            {
                name: 'Rayquaza GX',
                imageURL: 'http://localhost:3000/images/images6.png',
                price: 54.99,
                typeId: type1.id,
                categorieId: category1.id,
            },
            {
                name: 'Pikachu V',
                imageURL: 'http://localhost:3000/images/images7.png',
                price: 39.99,
                typeId: type1.id,
                categorieId: category1.id,
            },
            {
                name: 'Gardevoir EX',
                imageURL: 'http://localhost:3000/images/images8.png',
                price: 64.99,
                typeId: type1.id,
                categorieId: category1.id,
            },
            {
                name: 'Pokémon TCG: Sword & Shield—Evolving Skies Booster Display Box',
                imageURL: 'http://localhost:3000/images/images10.jpg',
                price: 143.64,
                typeId: type1.id,
                categorieId: category2.id,
            },
            {
                name: 'Pokémon TCG: Sword & Shield—Chilling Reign Booster Display Box',
                imageURL: 'http://localhost:3000/images/images11.jpg',
                price: 143.64,
                typeId: type1.id,
                categorieId: category2.id
            },
            {
                name: 'Pokémon TCG: Sword & Shield—Fusion Strike Booster Display Box',
                imageURL: 'http://localhost:3000/images/images12.jpg',
                price: 143.64,
                typeId: type1.id,
                categorieId: category2.id
            },
            {
                name: 'Pokémon TCG: Sword & Shield—Brilliant Stars Booster Display Box',
                imageURL: 'http://localhost:3000/images/images13.jpg',
                price: 143.64,
                typeId: type1.id,
                categorieId: category2.id
            },
            {
                name: 'Pokémon TCG: Sword & Shield—Battle Styles Booster Display Box',
                imageURL: 'http://localhost:3000/images/images14.jpg',
                price: 143.64,
                typeId: type1.id,
                categorieId: category2.id
            },
            {
                name: 'Pokémon TCG: Battle Academy (2022)',
                imageURL: 'http://localhost:3000/images/images15.jpg',
                price: 19.99,
                typeId: type1.id,
                categorieId: category3.id
            },
            {
                name: 'Pokémon TCG: V Battle Deck—Rayquaza vs. Noivern',
                imageURL: 'http://localhost:3000/images/images16.jpg',
                price: 29.99,
                typeId: type1.id,
                categorieId: category3.id
            },
            {
                name: 'Pokémon TCG: V Battle Deck—Venusaur vs. Blastoise',
                imageURL: 'http://localhost:3000/images/images17.jpg',
                price: 29.99,
                typeId: type1.id,
                categorieId: category3.id
            },
            {
                name: 'Pokémon TCG: Sword & Shield—Astral Radiance Elite Trainer Box',
                imageURL: 'http://localhost:3000/images/images18.jpg',
                price: 39.99,
                typeId: type1.id,
                categorieId: category3.id
            },
            {
                name: 'Pokémon TCG: Sword & Shield—Lost Origin Elite Trainer Box',
                imageURL: 'http://localhost:3000/images/images19.jpg',
                price: 39.99,
                typeId: type1.id,
                categorieId: category3.id
            }
        ],
    });
     // MTG cards
     await prisma.produit.createMany({
        data: [
            {
                name: 'Black Lotus',
                imageURL: 'http://localhost:3000/images/001.jpg',
                price: 9999.99,
                typeId: type2.id,
                categorieId: category1.id,
            },
            {
                name: 'Time Walk',
                imageURL: 'http://localhost:3000/images/002.jpg',
                price: 3499.99,
                typeId: type2.id,
                categorieId: category1.id,
            },
            {
                name: 'Ancestral Recall',
                imageURL: 'http://localhost:3000/images/003.jpg',
                price: 2999.99,
                typeId: type2.id,
                categorieId: category1.id,
            },
            {
                name: 'Tarmogoyf',
                imageURL: 'http://localhost:3000/images/004.jpg',
                price: 49.99,
                typeId: type2.id,
                categorieId: category1.id,
            },
            {
                name: 'Liliana of the Veil',
                imageURL: 'http://localhost:3000/images/005.jpg',
                price: 34.99,
                typeId: type2.id,
                categorieId: category1.id,
            },
            {
                name: 'Snapcaster Mage',
                imageURL: 'http://localhost:3000/images/006.jpg',
                price: 39.99,
                typeId: type2.id,
                categorieId: category1.id,
            },
            {
                name: 'Ulamog, the Ceaseless Hunger',
                imageURL: 'http://localhost:3000/images/007.jpg',
                price: 25.99,
                typeId: type2.id,
                categorieId: category1.id,
            },
            {
                name: 'Chandra, Torch of Defiance',
                imageURL: 'http://localhost:3000/images/008.jpg',
                price: 29.99,
                typeId: type2.id,
                categorieId: category1.id,
            },
        ],
    });

    // Yu-Gi-Oh! cards
    await prisma.produit.createMany({
        data: [
            {
                name: 'Dark Magician',
                imageURL: 'http://localhost:3000/images/Y1.jpg',
                price: 19.99,
                typeId: type3.id,
                categorieId: category1.id,
            },
            {
                name: 'Blue-Eyes White Dragon',
                imageURL: 'http://localhost:3000/images/Y2.jpg',
                price: 39.99,
                typeId: type3.id,
                categorieId: category1.id,
            },
            {
                name: 'Red-Eyes Black Dragon',
                imageURL: 'http://localhost:3000/images/Y3.jpg',
                price: 24.99,
                typeId: type3.id,
                categorieId: category1.id,
            },
            {
                name: 'Exodia the Forbidden One',
                imageURL: 'http://localhost:3000/images/Y4.jpg',
                price: 49.99,
                typeId: type3.id,
                categorieId: category1.id,
            },
            {
                name: 'Dark Magician Girl',
                imageURL: 'http://localhost:3000/images/Y5.jpg',
                price: 29.99,
                typeId: type3.id,
                categorieId: category1.id,
            },
            {
                name: 'Slifer the Sky Dragon',
                imageURL: 'http://localhost:3000/images/Y6.jpg',
                price: 79.99,
                typeId: type3.id,
                categorieId: category1.id,
            },
            {
                name: 'Obelisk the Tormentor',
                imageURL: 'http://localhost:3000/images/Y7.jpg',
                price: 74.99,
                typeId: type3.id,
                categorieId: category1.id,
            },
            {
                name: 'The Winged Dragon of Ra',
                imageURL: 'http://localhost:3000/images/Y8.jpg',
                price: 69.99,
                typeId: type3.id,
                categorieId: category1.id,
            },
            {
                name: 'Yu-Gi-Oh! Legendary Duelists: Season 3 Display',
                imageURL: 'http://localhost:3000/images/Y9.jpg',
                price: 89.99,
                typeId: type3.id,
                categorieId: category2.id,
            },
            {
                name: 'Yu-Gi-Oh! Maximum Gold: El Dorado Display',
                imageURL: 'http://localhost:3000/images/Y10.jpg',
                price: 129.99,
                typeId: type3.id,
                categorieId: category2.id,
            },
            {
                name: 'Yu-Gi-Oh! Kings Court Display',
                imageURL: 'http://localhost:3000/images/Y11.jpg',
                price: 94.99,
                typeId: type3.id,
                categorieId: category2.id,
            },
            {
                name: 'Yu-Gi-Oh! Ghosts From the Past Display',
                imageURL: 'http://localhost:3000/images/Y12.jpg',
                price: 99.99,
                typeId: type3.id,
                categorieId: category2.id,
            },
            {
                name: 'Yu-Gi-Oh! Battle of Chaos Display',
                imageURL: 'http://localhost:3000/images/Y13.jpg',
                price: 89.99,
                typeId: type3.id,
                categorieId: category2.id,
            },
            {
                name: 'Yu-Gi-Oh! Egyptian God Deck: Slifer the Sky Dragon',
                imageURL: 'http://localhost:3000/images/Y14.jpg',
                price: 14.99,
                typeId: type3.id,
                categorieId: category3.id,
            },
            {
                name: 'Yu-Gi-Oh! Egyptian God Deck: Obelisk the Tormentor',
                imageURL: 'http://localhost:3000/images/Y15.jpg',
                price: 14.99,
                typeId: type3.id,
                categorieId: category3.id,
            },
            {
                name: 'Yu-Gi-Oh! Structure Deck: Albaz Strike',
                imageURL: 'http://localhost:3000/images/Y16.jpg',
                price: 29.99,
                typeId: type3.id,
                categorieId: category3.id,
            },
            {
                name: 'Yu-Gi-Oh! Structure Deck: Cyber Strike',
                imageURL: 'http://localhost:3000/images/Y17.jpg',
                price: 29.99,
                typeId: type3.id,
                categorieId: category3.id,
            },
            {
                name: 'Yu-Gi-Oh! Speed Duel GX: Duel Academy Box',
                imageURL: 'http://localhost:3000/images/Y18.jpg',
                price: 39.99,
                typeId: type3.id,
                categorieId: category3.id,
            }
        ],
    });

    // Create some users
    await prisma.user.create({
        data: {
            email: 'user1@example.com',
            password: 'password1',
            pseudo: 'user1',
        },
    });

    await prisma.user.create({
        data: {
            email: 'user2@example.com',
            password: 'password2',
            pseudo: 'user2',
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });