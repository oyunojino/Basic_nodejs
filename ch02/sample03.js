// ### function-level-scope의 사용 ###

// 블록 범위 내에서 선언한 변수는 함수 내에서만 인정하고 함수 외부에서 선언한 변수는 모두 전역변수가 된다는 뜻
// scope(스코프)란 '범위'란 뜻으로 변수에 접근할 수 있는 범위

var puppy = "cute";
// let puppy = "cute";
console.log(puppy);
{
    var puppy = "so cute";
    // let puppy = "so cute";
}
console.log(puppy);