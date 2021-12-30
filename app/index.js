const express = require('express');
const routes = require('./routes/v1');
const { sequelize } = require('./utils/database');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST',  'PUT', 'DELETE');
    next();
});

app.use('/v1', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(res.status(404).json('Not found We are Monitoring It ☠️'));
});

(async () => {
  try {
    // creating tables on application startup
    await sequelize.sync({ force: false });
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is listening at PORT: ${process.env.PORT}`);
  });
  } catch (error) {
    console.log(error);
  }
})();
