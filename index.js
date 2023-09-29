const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');
const port = process.env.PORT || 2917;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure CORS to allow requests from your frontend (http://localhost:3001)
app.use(cors({
    origin: ['https://tkmarketing.vercel.app/', 'https://techkilla.com/', 'https://tk-marketing.vercel.app/'], // Change this to your frontend's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
}));

app.use(router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
