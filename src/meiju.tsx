// 枚举
enum Days {
    Sun,
    Mon,
    Tue = 4,
}
console.log("枚举", Days["Sun"]); // 0
console.log("枚举", Days["Mon"]); // 1
console.log("枚举", Days[1]); // Mon
