var express = require('express');
var router = express.Router();

// 需要自己实现的函数
function your_handle_function() {
  return {
    test: 1
  }
}

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {title: 'SERVER_NAME'});
});

router.post('/buy', async (req, res) => {
  // 请求的数据
  const request_data = req.body;

  const data = await your_handle_function();
  // 要返回的数据
  const response_data = {
    ...data,
  };
  res.json(response_data);
});

router.post('/sell', async (req, res) => {
  // 请求的数据
  const request_data = req.body;

  const data = await your_handle_function();
  // 要返回的数据
  const response_data = {
    ...data,
  };
  res.json(response_data);
});

module.exports = router;
