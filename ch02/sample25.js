// ### 사용자 정의 오류 ###

// 자바스크립트 내부에서 발생시키는 예외가 아니라 직접 정의해준 오류
// Uncaught   | 잡지 못했다 / 즉, 예외 처리를 해주지 않는다는 뜻

function sum(a, b) {
    if(typeof a !== 'number' || typeof y !== 'number') {
        throw 'type of arguments must be number type';
    }
    console.log(a+b);
}

sum(1, '4');