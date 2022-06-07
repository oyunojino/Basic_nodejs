// ### async/await_ async/await의 사용 ###

// await 사용법 | async 키워드가 포함된 함수안에 lock이 필요한 부분에 await 작성
// async       | 비동기로 처리하고 싶은 함수에 작성

function workP(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('workP function');
        }, sec * 1000);
    });
}

async function asyncFunc() {
    const result_workP = await workP(3);
    console.log(result_workP);
    return 'async function';
}

asyncFunc().then((result) => {
    console.log(result)
});