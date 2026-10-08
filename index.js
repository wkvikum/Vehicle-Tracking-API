const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const seedData = require('./src/seed/seed.json');

app.get('/', (req, res) => {
  res.json({ status: 'ok', session: 'NB6007CEM S2' });
});

// GET all districts
app.get('/districts', (req, res) => {
  res.json(seedData.districts);
});

// GET all provinces
app.get('/provinces', (req, res) => {
  res.json(seedData.provinces);
});

// GET /provinces/:provinceId
app.get("/provinces/:provinceId", (req, res) => {
  const province = findById(data.provinces, req.params.provinceId);
  province ? res.json(province) : res.status(404).json({ message: "Not found" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

