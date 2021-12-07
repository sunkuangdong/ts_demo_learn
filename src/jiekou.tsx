/**
＊ 1．interface和type区别
＊ 相同点
    ＊1—1．都可以描述一个对象或者函数
    ＊1—2．都允许进行扩展
＊ 不同点
    ＊2—1．type 声明基本类型别名、联合类型、元组等
    ＊2—2．typeof获取实例的对象
    ＊2-3．interface可以被合并
*/
// 接口

interface Clock {
    new(hour: number, minute: number): ClockInterface
}

interface ClockInterface {
    tick(): void;
}

class Dig implements ClockInterface {
    public tick(): void {
        console.log('1111');
    }
}

function createClock(
    ctor: ClockInterface,
    hour: number,
    minute: number
): ClockInterface {
    return new ctor(hour, minute)
}

const digital = createClock(Dig, 11, 12)
digital.tick()