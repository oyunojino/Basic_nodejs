const animal = {
    leg:4,
    tail: 1,
    say() {
        console.log('I have 4 legs 1 tail');
    }
}

const dog = {
    sound: 'wang'
}

const cat = {
    sound: 'yaong'
}
// 객체 안에 __proto__ 라는 프로퍼티가 있고 
// 프로토타입 : 프로퍼티를 만들어낸 원형인 프로토타입 객체를 참조하는 숨겨진 링트
//             중요한 이유는 '상속'을 가능하게 하기 때문
dog.__proto__ = animal;
cat.__proto__ = animal;

console.log(dog.leg);