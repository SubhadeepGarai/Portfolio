import express from 'express';
import cors from 'cors';
import myWorkData from './mywork_data.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/mywork', (req, res) => {
  res.json(myWorkData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
