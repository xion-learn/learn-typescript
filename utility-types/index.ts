type Todo = {
  title: string;
  description?: string;
}

// Awaited: 递归解开 Promise，获取返回类型
type A = Awaited<Promise<Promise<number>>>
let a: A


// Partial: 将对象类型中的所有属性变为可选
type B = Partial<Todo>
let b: B


// Required: 将对象类型中的所有属性变为必选
type C = Required<Todo>
let c: C


// Readonly: 将对象类型中的所有属性变为只读
type D = Readonly<Todo>
let d: D


// Record: 通过 key 和 value 构建一个对象类型
type E = Record<'title' | 'description', string>
let e: E


// Pick: 从对象类型中选出指定 key 构建一个新类型
type F = Pick<Todo, 'title'>
let f: F


// Omit: 从对象类型中排除指定 key 构建一个新类型
type G = Omit<Todo, 'title'>
let g: G


// Exclude: 从联合类型中排除指定成员
type H = Exclude<keyof Todo, 'title'>
let h: H