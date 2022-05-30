// ### 프로토타입을 이용한 객체 생성 ###

// 프로토타입(prototype) : 객체 지향 프로그래밍을 할 수 있게 도와주는 것
// 자바스크립트에서 기본 데이터 타입을 제외한 모든 것이 객체

function func() { };
console.log(func.prototype);

func.prototype.name = 'gildong';
console.log(func.prototype);