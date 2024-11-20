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

    // Pokémon cards
    await prisma.carte.createMany({
        data: [
            {
                name: 'Blastoise EX',
                imageURL: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_200.png',
                price: 75.99,
                typeId: type1.id,
            },
            {
                name: 'Charizard EX',
                imageURL: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_199.png',
                price: 89.99,
                typeId: type1.id,
            },
            {
                name: 'Mew EX',
                imageURL: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_193.png',
                price: 45.50,
                typeId: type1.id,
            },
            {
                name: 'Venusaur EX',
                imageURL: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_198.png',
                price: 29.99,
                typeId: type1.id,
            },
            {
                name: 'Pikachu FA',
                imageURL: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_173.png',
                price: 49.99,
                typeId: type1.id,
            },
            {
                name: 'Rayquaza GX',
                imageURL: 'https://images.pokemontcg.io/sm7/109_hires.png',
                price: 54.99,
                typeId: type1.id,
            },
            {
                name: 'Pikachu V',
                imageURL: 'https://images.pokemontcg.io/swsh9/157_hires.png',
                price: 39.99,
                typeId: type1.id,
            },
            {
                name: 'Gardevoir EX',
                imageURL: 'https://dz3we2x72f7ol.cloudfront.net/expansions/paldean-fates/en-us/SV4pt5_EN_233.png',
                price: 64.99,
                typeId: type1.id,
            },
        ],
    });
     // MTG cards
     await prisma.carte.createMany({
        data: [
            {
                name: 'Black Lotus',
                imageURL: 'https://www.mtgpics.com/pics/big/ung/004.jpg',
                price: 9999.99,
                typeId: type2.id,
            },
            {
                name: 'Time Walk',
                imageURL: 'https://www.mtgpics.com/pics/big/30e/083.jpg',
                price: 3499.99,
                typeId: type2.id,
            },
            {
                name: 'Ancestral Recall',
                imageURL: 'https://www.mtgpics.com/pics/big/30e/047.jpg',
                price: 2999.99,
                typeId: type2.id,
            },
            {
                name: 'Tarmogoyf',
                imageURL: 'https://www.mtgpics.com/pics/big/pip/349.jpg',
                price: 49.99,
                typeId: type2.id,
            },
            {
                name: 'Liliana of the Veil',
                imageURL: 'https://www.mtgpics.com/pics/big/dmu/097.jpg',
                price: 34.99,
                typeId: type2.id,
            },
            {
                name: 'Snapcaster Mage',
                imageURL: 'https://www.mtgpics.com/pics/big/tli/569.jpg',
                price: 39.99,
                typeId: type2.id,
            },
            {
                name: 'Ulamog, the Ceaseless Hunger',
                imageURL: 'https://www.mtgpics.com/pics/big/cmm/005.jpg',
                price: 25.99,
                typeId: type2.id,
            },
            {
                name: 'Chandra, Torch of Defiance',
                imageURL: 'https://www.mtgpics.com/pics/big/cmm/876.jpg',
                price: 29.99,
                typeId: type2.id,
            },
        ],
    });

    // Yu-Gi-Oh! cards
    await prisma.carte.createMany({
        data: [
            {
                name: 'Dark Magician',
                imageURL: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
                price: 19.99,
                typeId: type3.id,
            },
            {
                name: 'Blue-Eyes White Dragon',
                imageURL: 'https://images.ygoprodeck.com/images/cards/89631139.jpg',
                price: 39.99,
                typeId: type3.id,
            },
            {
                name: 'Red-Eyes Black Dragon',
                imageURL: 'https://images.ygoprodeck.com/images/cards/74677422.jpg',
                price: 24.99,
                typeId: type3.id,
            },
            {
                name: 'Exodia the Forbidden One',
                imageURL: 'https://images.ygoprodeck.com/images/cards/33396948.jpg',
                price: 49.99,
                typeId: type3.id,
            },
            {
                name: 'Dark Magician Girl',
                imageURL: 'https://images.ygoprodeck.com/images/cards/38033121.jpg',
                price: 29.99,
                typeId: type3.id,
            },
            {
                name: 'Slifer the Sky Dragon',
                imageURL: 'https://images.ygoprodeck.com/images/cards/10000020.jpg',
                price: 79.99,
                typeId: type3.id,
            },
            {
                name: 'Obelisk the Tormentor',
                imageURL: 'https://images.ygoprodeck.com/images/cards/10000000.jpg',
                price: 74.99,
                typeId: type3.id,
            },
            {
                name: 'The Winged Dragon of Ra',
                imageURL: 'https://images.ygoprodeck.com/images/cards/10000010.jpg',
                price: 69.99,
                typeId: type3.id,
            },
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