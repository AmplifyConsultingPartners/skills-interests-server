import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {dummyPersons, roles, techList} from './dummydata';
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
  .get('/api/me', (req, res) => {
    res.json(dummyPersons()[0]);
  })
  .get('/api/person', (req, res) => {
    res.json(dummyPersons());
  })
  .get('/api/tech', (req, res) => {
    res.json(techList);
  })
  .get('/api/roles', (req, res) => {
    res.json(roles);
  })
  .listen(5000, () => console.log('listening on port 5000'));
