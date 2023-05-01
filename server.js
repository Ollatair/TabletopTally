import express from 'express';
import path from 'path';
import localStorageDatabase from './src/components/localStorageDatabase.js'; 

const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = path.resolve();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle GET request to /api/games
app.get('/api/games', (req, res) => {
  const games = localStorageDatabase.getAllGames();
  res.json(games);
});

// Serve the index.html file for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
