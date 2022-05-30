// ### 프로토타입을 클래스처럼 사용해보기 ###
// 자바스크립트에서는 바로 이 프로토타입을 이용해,
// 클래스 대신 function과 new를 통해 클래스를 흉내낼 수 있음

function Animal() {}

// 객체를 공유해서 사용가능
// 객체.prototype.속성키 = 속성값;
Animal.prototype.legs = 4;
Animal.prototype.tail = 1;

const dog = new Animal();
const cat = new Animal();