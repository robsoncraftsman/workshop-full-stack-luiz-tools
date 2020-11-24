import app from './app';
import database from './database';

database.sync({ force: true });
console.log('Database connection OK');

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
