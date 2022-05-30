// ### bind 함수 ###

var people = {
    name: 'gildong',
    say: function () {
        console.log(this);
    }
}

people.say();
// .bind(this로 고정시킬 객체) 함수
var sayPeople = people.say.bind(people);
sayPeople();