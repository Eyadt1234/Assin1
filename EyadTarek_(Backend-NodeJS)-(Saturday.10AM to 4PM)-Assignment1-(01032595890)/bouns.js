function createCounter(init) {
    let count = init;
    return {
        increment: () => count = count + 1,
        decrement: () => count = count - 1,
        reset: () => (count = init),
    };
}

const counter = createCounter(5);
console.log(counter.increment()); 
console.log(counter.reset());     
console.log(counter.decrement());