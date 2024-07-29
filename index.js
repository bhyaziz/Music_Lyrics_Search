import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fetchApi from './public/js/fetchApi.js';

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Include API routes from fetchApi.js
fetchApi(app);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

