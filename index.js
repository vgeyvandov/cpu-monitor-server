import express from 'express';
import { getAverageCpuLoad, getCpuCount } from './cpu_data.js';

const app = express();
const port = 3001;

app.get('/api/cpu-count', (_req, res) => {
  res.json({ value: getCpuCount() });
});

app.get('/api/cpu-average', (_req, res) => {
  res.json({ value: getAverageCpuLoad() });
});

app.use((_req, res) => {
  res.json({ error: 'Uh oh, something went wrong' });
});

app.listen(port, () => {
  console.log(`CPU monitor app listening at http://localhost:${port}`);
});
