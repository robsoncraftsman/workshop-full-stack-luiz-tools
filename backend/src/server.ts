import app from './app';
import database from './database';

database.sync();
console.log('Database connection OK');

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
