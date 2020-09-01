function map(array, fn) {
    return array.map(e => {
        return fn(e);
    })
}

function reduce(array, fn, integer) {
    let value = (!!integer) ? integer : array[0];
    let i = (!!integer) ? 0 : 1;
    for (; i < array.length; i++) {
        value = fn(array[i], value)
    }
    return value;
}