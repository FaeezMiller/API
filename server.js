const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:3306"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to The Substance Users'});
});

require('./app/routes/Userroutes')(app);

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});