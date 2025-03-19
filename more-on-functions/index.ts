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