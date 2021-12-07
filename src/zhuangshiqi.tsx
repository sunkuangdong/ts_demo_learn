import "reflect-metadata";
// 装饰器
function inject(serviceIdentifier: string) {
    return function (target: Object, targetKey: string, index: number) {
        Reflect.defineMetadata(serviceIdentifier, "111", target)
    }
}

class IndexController {
    public indexService: string
    constructor(@inject("xxx") indexService: string) {
        this.indexService = indexService
    }
}

const index = new IndexController("1");

console.log(index.indexService);
// js 元编程
console.log(Reflect.getMetadata('xxx', IndexController));

