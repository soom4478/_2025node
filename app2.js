const express = require('express');
const tavelRouter = require('./routes/travel');
const path = require('path');
const mysql = require('mysql2');
const methodOverride = require('method-override');

const port = 3001;

const app = express();

app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/travel', tavelRouter);

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

// use : 모든 method에 대해, 경로가 없으면? -> 모든 경로에 대해
app.use((req, res) => {
    res.status(404).send('404 not found');
});

// 서버가 포트 3000에서 요청을 대기합니다.
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});
