// ts 的类
// 第一种私有
class Demo {
    private num: number;
}

const s = new Demo();
// 虽然会报错，但是仍然能输出
console.log(s.num);

// 第二种私有
class Demo1 {
    #num: number;
    constructor() {
        this.#num = 20
    }
}

const s1 = new Demo1();
// 会报错，不能输出
console.log(s.#num);
