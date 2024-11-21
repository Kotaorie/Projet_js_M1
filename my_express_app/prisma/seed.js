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
                imageURL: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_200.png',
                price: 75.99,
                typeId: type1.id,
                categorieId: category1.id,
            },
            {
                name: 'Charizard EX',
                imageURL: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_199.png',
                price: 89.99,
                typeId: type1.id,
                categorieId: category1.id,
            },
            {
                name: 'Mew EX',
                imageURL: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_193.png',
                price: 45.50,
                typeId: type1.id,
                categorieId: category1.id,
            },
            {
                name: 'Venusaur EX',
                imageURL: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_198.png',
                price: 29.99,
                typeId: type1.id,
                categorieId: category1.id,
            },
            {
                name: 'Pikachu FA',
                imageURL: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_173.png',
                price: 49.99,
                typeId: type1.id,
                categorieId: category1.id,
            },
            {
                name: 'Rayquaza GX',
                imageURL: 'https://images.pokemontcg.io/sm7/109_hires.png',
                price: 54.99,
                typeId: type1.id,
                categorieId: category1.id,
            },
            {
                name: 'Pikachu V',
                imageURL: 'https://images.pokemontcg.io/swsh9/157_hires.png',
                price: 39.99,
                typeId: type1.id,
                categorieId: category1.id,
            },
            {
                name: 'Gardevoir EX',
                imageURL: 'https://dz3we2x72f7ol.cloudfront.net/expansions/paldean-fates/en-us/SV4pt5_EN_233.png',
                price: 64.99,
                typeId: type1.id,
                categorieId: category1.id,
            },
            {
                name: 'Pokémon TCG: Sword & Shield—Evolving Skies Booster Display Box',
                imageURL: 'https://www.pokemon.com/us/pokemon-tcg/product-gallery/swsh07-booster-box/',
                price: 143.64,
                typeId: type1.id,
                categorieId: category2.id,
            },
            {
                name: 'Pokémon TCG: Sword & Shield—Chilling Reign Booster Display Box',
                imageURL: 'https://www.pokemon.com/us/pokemon-tcg/product-gallery/swsh06-booster-box/',
                price: 143.64,
                typeId: type1.id,
                categorieId: category2.id
            },
            {
                name: 'Pokémon TCG: Sword & Shield—Fusion Strike Booster Display Box',
                imageURL: 'https://www.pokemon.com/us/pokemon-tcg/product-gallery/swsh08-booster-box/',
                price: 143.64,
                typeId: type1.id,
                categorieId: category2.id
            },
            {
                name: 'Pokémon TCG: Sword & Shield—Brilliant Stars Booster Display Box',
                imageURL: 'https://www.pokemon.com/us/pokemon-tcg/product-gallery/swsh09-booster-box/',
                price: 143.64,
                typeId: type1.id,
                categorieId: category2.id
            },
            {
                name: 'Pokémon TCG: Sword & Shield—Battle Styles Booster Display Box',
                imageURL: 'https://www.pokemon.com/us/pokemon-tcg/product-gallery/swsh05-booster-box/',
                price: 143.64,
                typeId: type1.id,
                categorieId: category2.id
            },
            {
                name: 'Pokémon TCG: Battle Academy (2022)',
                imageURL: 'https://www.pokemon.com/us/pokemon-tcg/product-gallery/battle-academy-2022/',
                price: 19.99,
                typeId: type1.id,
                categorieId: category3.id
            },
            {
                name: 'Pokémon TCG: V Battle Deck—Rayquaza vs. Noivern',
                imageURL: 'https://www.pokemon.com/us/pokemon-tcg/product-gallery/v-battle-deck-rayquaza-v-noivern-v/',
                price: 29.99,
                typeId: type1.id,
                categorieId: category3.id
            },
            {
                name: 'Pokémon TCG: V Battle Deck—Venusaur vs. Blastoise',
                imageURL: 'https://www.pokemon.com/us/pokemon-tcg/product-gallery/v-battle-deck-venusaur-v-blastoise-v/',
                price: 29.99,
                typeId: type1.id,
                categorieId: category3.id
            },
            {
                name: 'Pokémon TCG: Sword & Shield—Astral Radiance Elite Trainer Box',
                imageURL: 'https://www.pokemon.com/us/pokemon-tcg/product-gallery/swsh10-elite-trainer-box/',
                price: 39.99,
                typeId: type1.id,
                categorieId: category3.id
            },
            {
                name: 'Pokémon TCG: Sword & Shield—Lost Origin Elite Trainer Box',
                imageURL: 'https://www.pokemon.com/us/pokemon-tcg/product-gallery/swsh11-elite-trainer-box/',
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
                imageURL: 'https://www.mtgpics.com/pics/big/ung/004.jpg',
                price: 9999.99,
                typeId: type2.id,
                categorieId: category1.id,
            },
            {
                name: 'Time Walk',
                imageURL: 'https://www.mtgpics.com/pics/big/30e/083.jpg',
                price: 3499.99,
                typeId: type2.id,
                categorieId: category1.id,
            },
            {
                name: 'Ancestral Recall',
                imageURL: 'https://www.mtgpics.com/pics/big/30e/047.jpg',
                price: 2999.99,
                typeId: type2.id,
                categorieId: category1.id,
            },
            {
                name: 'Tarmogoyf',
                imageURL: 'https://www.mtgpics.com/pics/big/pip/349.jpg',
                price: 49.99,
                typeId: type2.id,
                categorieId: category1.id,
            },
            {
                name: 'Liliana of the Veil',
                imageURL: 'https://www.mtgpics.com/pics/big/dmu/097.jpg',
                price: 34.99,
                typeId: type2.id,
                categorieId: category1.id,
            },
            {
                name: 'Snapcaster Mage',
                imageURL: 'https://www.mtgpics.com/pics/big/tli/569.jpg',
                price: 39.99,
                typeId: type2.id,
                categorieId: category1.id,
            },
            {
                name: 'Ulamog, the Ceaseless Hunger',
                imageURL: 'https://www.mtgpics.com/pics/big/cmm/005.jpg',
                price: 25.99,
                typeId: type2.id,
                categorieId: category1.id,
            },
            {
                name: 'Chandra, Torch of Defiance',
                imageURL: 'https://www.mtgpics.com/pics/big/cmm/876.jpg',
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
                imageURL: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
                price: 19.99,
                typeId: type3.id,
                categorieId: category1.id,
            },
            {
                name: 'Blue-Eyes White Dragon',
                imageURL: 'https://images.ygoprodeck.com/images/cards/89631139.jpg',
                price: 39.99,
                typeId: type3.id,
                categorieId: category1.id,
            },
            {
                name: 'Red-Eyes Black Dragon',
                imageURL: 'https://images.ygoprodeck.com/images/cards/74677422.jpg',
                price: 24.99,
                typeId: type3.id,
                categorieId: category1.id,
            },
            {
                name: 'Exodia the Forbidden One',
                imageURL: 'https://images.ygoprodeck.com/images/cards/33396948.jpg',
                price: 49.99,
                typeId: type3.id,
                categorieId: category1.id,
            },
            {
                name: 'Dark Magician Girl',
                imageURL: 'https://images.ygoprodeck.com/images/cards/38033121.jpg',
                price: 29.99,
                typeId: type3.id,
                categorieId: category1.id,
            },
            {
                name: 'Slifer the Sky Dragon',
                imageURL: 'https://images.ygoprodeck.com/images/cards/10000020.jpg',
                price: 79.99,
                typeId: type3.id,
                categorieId: category1.id,
            },
            {
                name: 'Obelisk the Tormentor',
                imageURL: 'https://images.ygoprodeck.com/images/cards/10000000.jpg',
                price: 74.99,
                typeId: type3.id,
                categorieId: category1.id,
            },
            {
                name: 'The Winged Dragon of Ra',
                imageURL: 'https://images.ygoprodeck.com/images/cards/10000010.jpg',
                price: 69.99,
                typeId: type3.id,
                categorieId: category1.id,
            },
            {
                name: 'Yu-Gi-Oh! Legendary Duelists: Season 3 Display',
                imageURL: 'https://images.ygoprodeck.com/images/sets/LED6.jpg',
                price: 89.99,
                typeId: type3.id,
                categorieId: category2.id,
            },
            {
                name: 'Yu-Gi-Oh! Maximum Gold: El Dorado Display',
                imageURL: 'https://images.ygoprodeck.com/images/sets/MAGO.jpg',
                price: 129.99,
                typeId: type3.id,
                categorieId: category2.id,
            },
            {
                name: 'Yu-Gi-Oh! Kings Court Display',
                imageURL: 'https://images.ygoprodeck.com/images/sets/KICO.jpg',
                price: 94.99,
                typeId: type3.id,
                categorieId: category2.id,
            },
            {
                name: 'Yu-Gi-Oh! Ghosts From the Past Display',
                imageURL: 'https://images.ygoprodeck.com/images/sets/GFTP.jpg',
                price: 99.99,
                typeId: type3.id,
                categorieId: category2.id,
            },
            {
                name: 'Yu-Gi-Oh! Battle of Chaos Display',
                imageURL: 'https://images.ygoprodeck.com/images/sets/BACH.jpg',
                price: 89.99,
                typeId: type3.id,
                categorieId: category2.id,
            },
            {
                name: 'Yu-Gi-Oh! Egyptian God Deck: Slifer the Sky Dragon',
                imageURL: 'https://images.ygoprodeck.com/images/sets/EGS1-SLIFER.jpg',
                price: 14.99,
                typeId: type3.id,
                categorieId: category3.id,
            },
            {
                name: 'Yu-Gi-Oh! Egyptian God Deck: Obelisk the Tormentor',
                imageURL: 'https://images.ygoprodeck.com/images/sets/EGS1-OBELISK.jpg',
                price: 14.99,
                typeId: type3.id,
                categorieId: category3.id,
            },
            {
                name: 'Yu-Gi-Oh! Structure Deck: Albaz Strike',
                imageURL: 'https://images.ygoprodeck.com/images/sets/SDCS.jpg',
                price: 29.99,
                typeId: type3.id,
                categorieId: category3.id,
            },
            {
                name: 'Yu-Gi-Oh! Structure Deck: Cyber Strike',
                imageURL: 'https://images.ygoprodeck.com/images/sets/SDCS.jpg',
                price: 29.99,
                typeId: type3.id,
                categorieId: category3.id,
            },
            {
                name: 'Yu-Gi-Oh! Speed Duel GX: Duel Academy Box',
                imageURL: 'https://images.ygoprodeck.com/images/sets/SBSC.jpg',
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