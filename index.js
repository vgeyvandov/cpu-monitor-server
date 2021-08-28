import express from 'express';
import { getAverageCpuLoad } from './cpu_data.js';

const app = express();
const port = 3001;

// allow local client running on port 3000 to make requests to API
app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'authorization, Content-Type');
  next();
});

app.get('/cpu-average', (_req, res) => {
  res.json({ cpuLoadAverage: getAverageCpuLoad(), createdAt: Date.now() });
});

app.use((_req, res) => {
  res.json({ error: 'Uh oh, something went wrong' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
