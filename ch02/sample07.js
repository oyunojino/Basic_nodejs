// ### 객체와 프로퍼티 ###
//  객체    : 우리가 인식할 수 있는 하나의 카테고리, 덩어리 
//         : 자바스크립트에서 객체는 키(KEY)와 값(VALUE)의 쌍으로 이루어지 프로퍼티(PROPERTY)의 정렬되지 않은 집합
// 프로퍼티 : 객체가 가진 특징, 정보

const country = {
//  KEY : VALUE    => PROPERTY
    name: "korea",
    population: "5178579",
// METHOD : 객체 안에 '함수'를 넣어서 만드는 것
get_name: function() {
        return this.name;
    }
}