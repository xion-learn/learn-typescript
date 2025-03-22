// 带属性的函数声明
type myFunction = {
  a: string
  (arg: string): boolean
}

declare function useFn(fn: myFunction): boolean

function myFn(arg: string) {
  return !!arg
}
myFn.a = ''
useFn(myFn)


// 定义构造函数的类型
interface CallOrConstruct {
  (n?: number): string
  new (s: string): Date
}

function fn(ctor: CallOrConstruct) {
  console.log(ctor(10))
  console.log(new ctor("10"))
}

fn(Date)


// 包含两个重载签名和一个实现签名
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// 没有匹配的重载签名，因此编译出错
const d3 = makeDate(1, 3);


function fn2(x: string): string;
// 当重载签名类型和实现签名不匹配时，会导致错误
function fn2(x: number): boolean;
function fn2(x: string | number) {
  return "oops";
}


function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}
len(""); // OK
len([0]); // OK
// 重载接受字符串或数组，但不接受字符串和数组的联合类型
len(Math.random() > 0.5 ? "hello" : [0]);


interface User {
  id: number;
  admin: boolean;
}
declare const getDB: () => DB;
// ---cut---
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});


// 将非 void 返回类型的函数赋值给 void 返回类型的函数是可行的
type voidFunc = () => void;
const f1: voidFunc = () => {
  return true;
};

const f2: voidFunc = () => true;
const f3: voidFunc = function () {
  return true;
};
// 变量会被标记为 void，但实际其已经被赋值为 true
const v1 = f1();
const v2 = f2();
const v3 = f3();
console.log(v1, v2, v3)
