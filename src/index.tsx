interface A {
    <T>(arg: T): number;
}

type Test = <T>(arg: T) => number;

const Sun: A = function <T>(arg: T) {
    return Number(arg);
}
Sun(1)