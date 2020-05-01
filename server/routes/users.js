var express = require('express');
var router = express.Router();
let NEXT_ID = 0;
let DB = [
  {
    _id: 1,
    name: 'pankaj',
    email: 'pankaj@gamil.com',
    state: 'UP',
    blackList: false
  }, {
    _id: 2,
    name: 'Ajay',
    email: 'Ajay@gamil.com',
    state: 'UP',
    blackList: false
  }, {
    _id: 3,
    name: 'aj',
    email: 'aj@gamil.com',
    state: 'UP',
    blackList: false
  }
]
let GLOBAL_USER = {}

/* GET users listing. */
router.get('/:userId', function (req, res, next) { // read &&
  const userId = req.params.userId
  console.log("req.params:::::::::::", userId);

  const user = DB.filter(user => user._id === Number(userId))
  res
    .status(200)
    .json(user[0])
});

router.post('/', function (req, res, next) { // create
  console.log("saving in database.......");
  GLOBAL_USER = {
    _id: ++NEXT_ID,
    ...req.body
  }
  DB.push(GLOBAL_USER);
  console.log("datbase .......", DB);

  res
    .status(201)
    .json(GLOBAL_USER)
});

// router.put('/', function (req, res, next) { // update
// console.log("req.query:::::::::::", req.query);   res.send('respond with a
// resource'); }); router.delete('/', function (req, res, next) { // delete
// console.log("req.query:::::::::::", req.query);   res.send('respond with a
// resource'); });

module.exports = router;
