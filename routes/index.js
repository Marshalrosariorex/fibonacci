var express = require('express');
var router = express.Router();

function fibonacci(n) {
  let sno = 0;
  function fibo(n, a, b) {
    if (n === sno) return a;
    sno++;
    return fibo(n, b, a + b, sno);
  }
  return fibo(n, 0, 1, sno);
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
  let nth = parseInt(req.body.nth_position);
  if (isNaN(nth)) {
    res.render('index', { message: 'Please enter a valid number!', series: [] });
  } else {
    let fibonacci_number = fibonacci(nth);
    res.render('index', { message: `Fibonacci series up to ${nth} positions: ${fibonacci_number}` });
  }
});

module.exports = router;
