// async iterator

const myAsyncIterator = {
    async *[Symbol.asyncIterator]() {
        yield "hello";
        yield 'async';
        yield 'iterator'
    }
};

(async () => {
    for await (let x of myAsyncIterator) {
        console.log(x);
    };
})();























