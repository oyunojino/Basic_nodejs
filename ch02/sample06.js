// ### closure(클로저) ###
// 내부 함수가 외부 함수의 스코프(범위)에 접근할 수 있는 것

function outer() {
    var a = 'A';
    var b = 'B';

    function inner() {
        var a ='AA';
        console.log(b);
    }
    return inner;
}

var outerFunc = outer();
outerFunc();