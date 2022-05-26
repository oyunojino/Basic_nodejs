// ### 배열 내장 함수_forEach()  ###

// ERROR => ReferenceError: alert is not defined ...
//      서버 사이드에서는 에러가 발생할 수 있습니다. (서버에서는 alert가 없거든요)
//      if (typeof window !== 'undefined') {}  감싸주기!!!
// 출처 : https://www.inflearn.com/questions/17768

if (typeof window !== 'undefined') {
    let array1 = ['a', 'b', 'c'];
    array1.forEach(Element=>alert(Element));
}