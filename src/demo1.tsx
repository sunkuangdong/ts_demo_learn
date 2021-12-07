// 布尔类型
let isDone: boolean = false;

// 字符串类型
let isString: string = null;
isString = '1'

// number类型
let num: number = null;
num = 1

// void类型是undefined
let ud:void = undefined;

interface Person {
    age: number;
    [proName: string]: any; // 不知道后面会添加成啥
}