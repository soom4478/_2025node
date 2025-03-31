const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// .env로 민감한 데이터를 이동
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

db.connect(err => {
    if(err) {
        console.err('MySQL 연결 실패:', err);
        return;
    }
    console.log('MySQL에 연결되었습니다.')
})

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/travel', (req, res) => {
    const query = 'SELECT id, name FROM travellist';
    db.query(query, (err, results) => {
        if(err) {
            console.error('데이터베이스 뭐리 실패');
            res.status(500).send('Internal Server Error');
            return;
        }
        const travelList = results;
        res.render('travel', { travelList });
    });
});

app.get('/travel/:id', (req, res) => {
    const travelID = req.params.id;
    const query = 'SELECT * FROM travellist WHERE id = ?';
    db.query(query, [travelID], (err, results) => {
        if(err) {
            console.error('DB 쿼리 실패', err);
            res.status(500).send('내부 서버 에러');
            return;
        }
        if(results.length === 0) {
            res.status.apply(404).send('여행지를 찾을 수 없습니다.');
            return;
        }
        const travel = results[0];
        res.render('travelDetail', {travel});
    })
})

// 서버가 포트 3000에서 요청을 대기합니다.
app.listen(3000, () => {
    console.log('서버가 http://localhost:3000에서 실행 중입니다.');
});
