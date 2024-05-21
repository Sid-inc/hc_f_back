import express, { Request, Response } from 'express';

const app = express();
const port = 5518;

app.get('/', (req: Request, res: Response) => {
  res.send('Ehlo');
});

app.listen(port, () => {
  console.log('example');
})