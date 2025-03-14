function 함수(매개변수) {
    console.log('함수 ' + 매개변수);
}
함수('매개변수');

// 익명함수 : 함수 이름이 없는 함수
익명함수 = function(매개변수) {
    console.log('함수 ' + 매개변수);
}
익명함수('s');

// arrow function
// 매개변수가 하나일 때 소관호를 제거해도 된다
// 함수 body가 한 줄이거나 return일 때
익명함수 = 매개변수 => console.log('함수 ' + 매개변수);
익명함수('s');