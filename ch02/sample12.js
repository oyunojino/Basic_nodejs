// ### this의 사용 ###
// people.say()에서 people객체가 say()를 호출했으므로 this는 people의 객체가 되고,
// sayPeople 변수에 people.say를 넣고 호출한 경우는 전역(Global)변수 즉, 전역이 호출한 주체가 되므로 this는 전역객체가 됨

var people = {
    name: 'gildong',
    say: function () {
        console.log(this);
    }
}

people.say();

var sayPeople = people.say;
sayPeople();