const { PrismaClient } = require('@prisma/client');
const express = require('express');
const path = require('path');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:8080',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));
app.use(express.json()); // Middleware pour parser les requêtes JSON
app.use(express.urlencoded({ extended: true })); 
app.use('/images', express.static(path.join(__dirname, 'images')));
let db = new sqlite3.Database('./mydb.sqlite3', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (user && user.password === password) {
      res.status(200).json({ message: 'Login successful', pseudo: user.pseudo });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.post('/register', async (req, res) => {
  const { email, password, pseudo } = req.body;
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      res.status(400).json({ message: 'Email already in use' });
    } else {
      const newUser = await prisma.user.create({
        data: { email, password, pseudo }
      });
      res.status(201).json({ message: 'User registered successfully', user: newUser });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.get('/cards', async (req, res) => {
  const { type, price, name, categories } = req.query;
  try {
    const types = await prisma.type.findFirst({
      where: { typeCarte: type,}
    });
    let filters = { typeId: types.id };
    if (price) {
      const parsedPrice = parseFloat(price);
      if (!isNaN(parsedPrice)) {
        filters.price = { lte: parsedPrice };
      }
    }
    if (name) {
      filters.name = { contains: name };
    }
    if(categories){
      if (Array.isArray(categories)) {
        filters.categorieId = {
          in: await Promise.all(categories.map(async (category) => {
        const categorie = await prisma.categorie.findFirst({
          where: { categoryName: category },
        });
        return categorie.id;
          }))
        };
      } else {
        const categorie = await prisma.categorie.findFirst({
          where: { categoryName: categories },
        });
        filters.categorieId = categorie.id;
      }
    }
    const cards = await prisma.produit.findMany({
      where: filters,
    });
    
    res.json(cards);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.get('/categories', async (req, res) => {
  try {
    const categories = await prisma.categorie.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/categories/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const category = await prisma.categorie.findUnique({
      where: { id: id },
    });
    if (category) {
      res.json(category.categoryName);
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});