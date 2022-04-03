const express = require('express');
const router = express.Router();

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
//TODO: changue routes in src/routes
router.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(5000, () => {
    console.log('Server on port', 5000);
});