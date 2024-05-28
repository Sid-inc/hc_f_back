import { app } from './app';

const port = 5518;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
