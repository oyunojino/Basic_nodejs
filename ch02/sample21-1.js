// ### promise_ 일반 비동기 함수 ###

// promise는 보낸 요청에 대해 응답이 준비되었을 때 알림을 주는 알리미 역할

function work(sec, callback) {
    setTimeout(() => {
        callback(new Date().toISOString);
    }, sec*1000);
};

work(1, (result) => {
    console.log('첫 번째 작업', result);
});


work(1, (result) => {
    console.log('두 번째 작업', result);
});

work(1, (result) => {
    console.log('세 번째 작업', result);
});