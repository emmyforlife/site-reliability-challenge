const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());

app.get('/', (req, res) => res.send('Hello World'))

app.listen(PORT, () => console.log(`listening on port ${PORT}`));