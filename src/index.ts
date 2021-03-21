import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {dummyPersons} from './dummydata';
const app = express();

mongoose.connect('mongodb://localhost:27017/skills', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('connected to mongodb')).catch((err) => console.log(err));

app
  .use(express.json())
  .use(cors())
  .get('/', (req, res) => {
    res.json("connected")
  })
  .get('/api/person', (req, res) => {
    res.json(dummyPersons());
  })
  .listen(5000, () => console.log('listening on port 5000'));
