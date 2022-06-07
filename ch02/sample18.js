// ### 콜백 함수_ 동기 처리 ###

setTimeout(() => {
    setTimeout(() => { 
        console.log('todo: Second Work!');
    }, 2000);
    console.log('todo: First Work!');
}, 3000);