function f() {
  return { x: 10, y: 3 };
}
// 使用 typeof 获取函数类型
type P = ReturnType<typeof f>;


declare function msgBox(message: string): string
// typeof 操作符只能用于变量名或其属性，其他用法都不合法
let shouldContinue: typeof msgBox("Are you sure you want to continue?");