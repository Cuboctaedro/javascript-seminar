type Add = (a: number, b: number) => number;

const add: Add = (a: number, b: number) => {
    return a + b;
}

console.log(add (3, 4));