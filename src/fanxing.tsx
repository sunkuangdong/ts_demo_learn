interface Length {
    length: number;
}

function id<T extends Length>(arg: T): T {
    console.log(arg.length);
    return arg
}
id<string>('111')

// 类型 实体类
class GenNumber<T>{
    zeroValue: T | undefined;
}

const a1 = new GenNumber<number>()
a1.zeroValue = 111

// 使用泛型重载
function getData<T>(value: T): T {
    return value
}
getData<number>(1)
getData<string>("1")

// 泛型接口
interface ConfigFn {
    <T>(value: T): void;
}
const fn: ConfigFn = function <T>(value: T) {
    console.log(value);
}
fn(1)

// 动态泛型
interface Book {
    msg: string;
}
class Bookmark<T extends Book = Book>{
    items: T[] = []
}
const a2 = new Bookmark<null>()
a2.items = [] // items: null[]