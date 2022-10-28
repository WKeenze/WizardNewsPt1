const express = require("express");
const app = express();
const morgan = require('morgan');
const postBank = require('./postBank');
const postList = require('./views/postList');
const postDetails = require('./views/postDetails');
const errFunc = require('./views/err');


app.use(morgan('dev'));
app.use(express.static('public'));

app.get("/", (req, res, next) => {
  const posts= postBank.list();
res.send(postList(posts));
})

app.get('/posts/:id', (req, res, next) => {
  const post = postBank.find(req.params.id);
  if (!post.id) {
    res.send(next());
  }
  res.send(postDetails(post));
});

app.use('*', (req, res, next) => {
  res.status(404).send(errFunc());
next()
})

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
