const { PrismaClient } = require('@prisma/client');
const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const prisma = new PrismaClient();

app.use(cors({
  origin: 'http://localhost:8080',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));
app.use(express.json()); // Middleware pour parser les requêtes JSON
app.use(express.urlencoded({ extended: true })); 
  
let db = new sqlite3.Database('./mydb.sqlite3', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body.data;
  try {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (user && user.password === password) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});
// Register route
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
//get card
app.get('/cards', async (req, res) => {
  const { type } = req.query;
  try {
    const types = await prisma.type.findFirst({
      where: { typeCarte: type }
    });
    const cards = await prisma.carte.findMany({
      where: { typeId: types.id }
    });
    res.json(cards);
  } catch (error) {
    res.status(500).send(error.message);
  }
});