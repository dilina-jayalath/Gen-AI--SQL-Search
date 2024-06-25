const express = require('express');
const axios = require('axios');
const mysql = require('mysql2');
const cors = require('cors')
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'atliq_tshirts'
});

app.post('/query', async (req, res) => {
    const userQuery = req.body.query;

    try {
        const response = await axios.post('http://localhost:5001/query', { query: userQuery });
        res.json(response.data);
        console.log(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
