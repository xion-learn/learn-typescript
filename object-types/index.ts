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
