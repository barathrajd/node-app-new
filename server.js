const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');

const whitelist = ['https://www.google.com'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.send('Hello');
});

app.all('*', (req, res, next) => {
  res.send('Not Found');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
