const axios = require('axios');
const dotenv = require('dotenv').config();

const fetchApiKey = async (req, res) => {
    try {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const response = await axios.post(`${process.env.BACKEND_API}/api/key`, {}, requestOptions);
        const apiKey = response.data.apiKey;

        process.env.API_KEY = apiKey;

        res.status(201).json({ fetchedApiKey: apiKey });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getEnvironmentKey = async (req, res) => {
    try {
        const environmentKey = `${process.env.API_KEY}`;

        res.status(200).json({ environmentKey: `${process.env.API_KEY}` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    fetchApiKey,
    getEnvironmentKey
};