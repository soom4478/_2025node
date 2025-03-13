// http 모듈을 가져옵니다.
const http = require('http');

// 서버를 생성합니다.
const server = http.createServer((req, res) => {
  // HTTP 응답 헤더 설정
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // 200 <- 상태코드 ex) 404
  
  // 응답 본문에 'Hello, World!'를 보냅니다.
  res.end('Hello, World!\n');
});

// 서버가 포트 3000에서 요청을 대기합니다.
server.listen(3000, () => { // 콜백 : 함수를 매개변수로 전달, 요청에 대한 응답
  console.log('서버가 http://localhost:3000에서 실행 중입니다.');
});
