// 数组 - 元祖
let arr: number[] = [1, 2]

// 这里的元祖只能接受两个值 - 类型固定了
let arr1: [number, string] = [1, "2"]

// 区别
// 元祖 - 类型不固定
function useFetch() {
    const response: string = '1'
    const age: number = 1
    return [response, age]
}
// response 类型是string｜number
const [response] = useFetch()

