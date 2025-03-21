// express 모듈을 가져옵니다.
const express = require('express');

// express 애플리케이션을 생성합니다.
const app = express();

app.use(express.json());

app.get('/sw', (req, res) => {
  // 응답 본문에 'Hello, World!'를 보냅니다.
  res.send('get sw');
});

app.post('/sw', (req, res) => {
  // 응답 본문에 'Hello, World!'를 보냅니다.
  res.send(req.body);
});

// 서버가 포트 3000에서 요청을 대기합니다.
app.listen(3000, () => {
  console.log('서버가 http://localhost:3000에서 실행 중입니다.');
});
