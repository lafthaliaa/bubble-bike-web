const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static("public"));

// Routes
app.use('/api/newproduct', require('./routes/newproductRoutes'));
app.use('/api/bestseller', require('./routes/bestsellerRoutes'));
app.use('/api/promo', require('./routes/promoRoutes'));


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});