type Person = { age: number; name: string; alive: boolean };

type Age = Person["age"]; // 就像访问对象的属性一样访问对象类型的属性类型
type Ag = Person["ag"]; // 访问不存在的键类型会出错

let age: Age
let ag: Ag


const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

// 支持任意类型，联合类型，不仅仅是对象的键文字类型
type Person1 = typeof MyArray[number]["name" | "age"];
