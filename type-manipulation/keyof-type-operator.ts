type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

const map: Mapish = { 0: true, '1': true }
// map[0] 和 map['0'] 是等价的，因为在访问数字键时，会自动转换为字符串
console.log(map[0], map['0'])