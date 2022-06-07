// ### async/await_ promise객체와 async/await ###

// promise의 단점(가독성이 떨어짐) 보완

function workP(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date().toISOString());
        }, sec * 1000);
    });
}

function justFunc() {
    return 'just Function';
}

async function asyncFunc() {
    return 'async Function';
}

console.log(justFunc());
console.log(asyncFunc());
console.log(workP());