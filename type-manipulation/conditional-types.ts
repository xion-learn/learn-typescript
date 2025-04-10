declare function stringOrNum(x: string): number;
declare function stringOrNum(x: string | number): string | number;
declare function stringOrNum(x: number): string;

// type T1 = string
// 作用于重载函数类型时，只会匹配最后一个重载签名
type T1 = ReturnType<typeof stringOrNum>;
let t1: T1


type ToArray<Type> = Type extends any ? Type[] : never;
type ToArray1<Type> = [Type] extends [any] ? Type[] : never;

// type StrArrOrNumArr = string[] | number[]
// 作用于联合类型时，会变成分配类型
type StrArrOrNumArr = ToArray<string | number>;

// type StrArrOrNumArr1 = (string | number)[]
// 使用中括号可以组织这种默认行为
type StrArrOrNumArr1 = ToArray1<string | number>;

let strArrOrNumArr: StrArrOrNumArr
let strArrOrNumArr1: StrArrOrNumArr1
