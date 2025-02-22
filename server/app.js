const express = require('express');

const userRouter = require('./routes/user');

const app = express();

const port = process.env.PORT || 8080;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});