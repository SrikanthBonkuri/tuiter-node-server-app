//import posts from "./tuits.js";
//let tuits = posts;

import * as tuitsDao from './tuits-dao.js';

const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  res.json(tuits);
}

const createTuit = async (req, res) => {
  const newTuit = req.body;
  //newTuit._id = (new Date()).getTime()+'';
  newTuit.likes = 0;
  newTuit.liked = false;
  newTuit.replies = 0;
  newTuit.retuits = 0;
  newTuit.userName = "NASA";
  newTuit.handle = "@nasa";
  newTuit.image = "nasa.png";
  newTuit.time = "1m";
  newTuit.topic = "Space";
  newTuit.title = "NASA Launch";
  //tuits.push(newTuit);
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  //res.json(newTuit);
  res.json(insertedTuit);
}

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  /*tuits = tuits.filter((t) =>
    t._id !== tuitdIdToDelete);
  res.sendStatus(200);*/
  res.json(status);
}

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  /*const tuitIndex = tuits.findIndex((t) => t._id === tuitdId)
  tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
  res.sendStatus(200);*/
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
  res.json(status);
}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
