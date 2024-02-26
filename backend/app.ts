import express from 'express';
import cors from 'cors';

const port = 3000;
const app = express();

app.use(cors(), express.json());
app.get('/', (req, res) => res.send('Hello, World!'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
