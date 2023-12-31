import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import { createNewUser, signin } from './handlers/auth';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Hello' });
});

app.use('/api', router);
app.post('/user', createNewUser);
app.post('/signin', signin);

export default app;
