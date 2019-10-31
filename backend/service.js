import express from 'express'

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
    res.send("Hello There!!!");
});

app.listen(port, () => console.log("Service Running"));
