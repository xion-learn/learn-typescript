interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let person: Person = {
  name: "Person McPersonface",
  age: 42,
};

// ts 在检查属性是否兼容时，会忽略 readonly
let readonlyPerson: ReadonlyPerson = person;
let writablePerson: Person = readonlyPerson;


interface NumberDictionary {
  [index: string]: number;

  length: number;
  name: string; // 字符串类型的属性会受到对于索引签名的约束
}


interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}
// 对于字面量对象，会进行额外属性检查，因此参数中不可出现 SquareConfig 中未定义的属性
let mySquare = createSquare({ colour: "red", width: 100 });
// 使用断言则会忽略额外属性检查
let mySquare1 = createSquare({ colour: "red", width: 100 } as SquareConfig);
// 将字面量对象赋值给变量，再传给函数，也会忽略额外属性检查
let squareOptions = { colour: "red", width: 100 };
let mySquare2 = createSquare(squareOptions);
// 但若没有和参数匹配的属性，仍然会发出警告
let squareOptions3 = { colour: "red" };
let mySquare3 = createSquare(squareOptions3);
