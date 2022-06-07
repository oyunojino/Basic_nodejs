// ### promise_ 동기적 처리1 ###

function work(sec, callback) {
    setTimeout(() => {
        callback(new Date().toISOString);
    }, sec*1000);
};

work(1, (result) => {
    console.log('첫 번재 직업', result);

    work(1, (result) => {
        console.log('두 번재 직업', result);
    
        work(1, (result) => {
            console.log('세 번재 직업', result);
        });
    });
});