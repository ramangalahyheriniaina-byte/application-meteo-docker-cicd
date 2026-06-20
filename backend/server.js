const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const API_KEY = "3959c19a9c4c10766c55beaf6b6a0e04";

// API météo actuelle
app.get('/api/weather/:city', async (req, res) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${API_KEY}&units=metric&lang=fr`;

        const response = await axios.get(url);

        res.json(response.data);

    } catch (error) {
        res.status(404).json({
            error: "Ville non trouvée"
        });
    }
});

// API prévisions
app.get('/api/forecast/:city', async (req, res) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${req.params.city}&appid=${API_KEY}&units=metric&lang=fr`;

        const response = await axios.get(url);

        res.json(response.data);

    } catch (error) {
        res.status(404).json({
            error: "Erreur prévisions"
        });
    }
});

// Route d'accueil
app.get('/', (req, res) => {
    res.json({
        status: "OK",
        message: "Weather API is running"
    });
});

// Route inconnue
app.use((req, res) => {
    res.status(404).json({
        error: "Route non trouvée"
    });
});

app.listen(PORT, () => {
    console.log(` Serveur prêt sur http://localhost:${PORT}`);
});
