const express = require('express');
const app = express();
const PORT = 5000;

const fetchedApiRoute = require('./routes/routes.js');
app.use('/api', fetchedApiRoute);

app.get('/', (req, res) => {
    res.json({ message: 'Server is up and running 🎉🎉🎉' });
});

app.listen(PORT, () => {
    console.log(`Server is up and running 🎉 on port http://localhost:${PORT}`);
});