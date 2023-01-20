var express = require('express');
var router = express.Router();

const pollRes = []
const chatMessages = []
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is chat');
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is chat');
});

/* GET users listing. */
router.get('/poll', function(req, res, next) {
  pollRes.push(res);
  setTimeout(update, 3000);

});

router.post('/', function(req, res, next) {
  const {message} = req.body
  chatMessages.push(message)
  res.send("ok")
})

function update() {
 const message = chatMessages.shift()

let response
  while (response = pollRes.shift()) {

    response.send(message)
    
  }
}


module.exports = router;
