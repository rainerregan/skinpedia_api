import express from 'express'
import * as dotenv from 'dotenv'

import productRouter from './routes/product.route.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Server Up" });
});

// Routers
app.use('/products', productRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});