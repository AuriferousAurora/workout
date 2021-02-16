const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const router = new express.Router();
const db = require('./db');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/exercises', async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM exercises');
        res.status(200).json({
            status: 'success',
            results: results.rows.length,
            data: { 'exercises': results.rows }
        });
    } catch (error) {
        console.log(error);
    }
});

app.post('/exercises', async (req, res) => {
    try {
        const results = await db.query('INSERT INTO exercises (id, name) VALUES (gen_random_uuid(), $1) returning *;', [req.body.name]);
        console.log(results);
        res.status(200).json({
            status: 'success',
            results: results.rows.length,
            data: { 'exercises': results.rows }
        });
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => console.log('Server is up and listening on port ' + port));