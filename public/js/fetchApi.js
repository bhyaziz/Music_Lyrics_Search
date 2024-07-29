import fetch from 'node-fetch';

export default function(app) {
    app.get('/api/search', async (req, res) => {
        const { query } = req.query;
        const apiUrl = `https://api.lyrics.ovh/suggest/${query}`;
        console.log(`Fetching suggestions from: ${apiUrl}`);

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log('Response from API:', data);
            res.json(data);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
            res.status(500).json({ error: 'An error occurred while fetching suggestions' });
        }
    });

    app.get('/api/lyrics', async (req, res) => {
        const { artist, title } = req.query;
        const apiUrl = `https://api.lyrics.ovh/v1/${artist}/${title}`;
        console.log(`Fetching lyrics from: ${apiUrl}`);

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log('Response from API:', data);
            res.json(data);
        } catch (error) {
            console.error('Error fetching lyrics:', error);
            res.status(500).json({ error: 'An error occurred while fetching the lyrics' });
        }
    });
}

