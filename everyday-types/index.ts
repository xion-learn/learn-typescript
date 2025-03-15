type Point = {
  x: number,
  y: number
  z: number;
}

// The parameter's type annotation is an object type
function printCoord(pt: { x: number, y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// 重复定义 interface 来添加新字段
interface A {
  title: string;
}
interface A {
  ts: number;
}
let a: A
console.log(a.title, a.ts);

// 而 type 不可重复定义
type B = {
  title: string;
}
type B = {
  ts: number;
}
let b: B
console.log(b.title, b.ts); // Unresolved variable ts

let n: null = 1
