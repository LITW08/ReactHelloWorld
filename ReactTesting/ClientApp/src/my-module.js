function foo() {
    console.log('foo');
}

const add = (x, y) => {
    return x + y;
}

export { foo, add };

function bar() {
    console.log('bar');
}

export default bar;