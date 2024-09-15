import app from './app';

const port = process.env.PORT || 8080;

app.listen(port, (): void => {
  console.log(`Example app listening on port ${port}`);
});
