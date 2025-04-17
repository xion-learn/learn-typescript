class Base {
  k = 4;
}

class MyClass extends Base{
  // 类中可以使用索引签名
  [s: string]: boolean | ((s: string) => boolean);
  name: string;
  readonly n: string;

  // 构造函数上可以声明重载
  constructor(x: number, y: number);
  constructor(xy: string);
  constructor(x: string | number, y: number = 0) {
    // 子类中访问 this 时，必须先调用 super()
    super()
    this.name = "hello";
    this.n = "hello";
  }

  err() {
    // readonly 修饰的变量只能在构造函数中赋值
    this.n = '11'
  }

  check(s: string) {
    return this[s] as boolean;
  }

  _length = 0;
  // 通过 setter/getter 声明变量
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}


interface A {
  x: number;
  y?: number;
}
class C implements A {
  x = 0;
}
const c = new C();
// interface 并不会影响类的运行
c.y = 10;


class Base1 {
  greet() {
    console.log("Hello, world!");
  }
}
class Derived extends Base1 {
  // 子类必须遵循父类的约束，否则报错
  greet(name: string) {
    console.log(`Hello, ${name.toUpperCase()}`);
  }
}



class Base2 {
  name = "base";
  constructor() {
    console.log("My name is " + this.name);
  }
}

class Derived2 extends Base2 {
  name = "derived";
}

// Prints "base", not "derived"
// 父类的构造函数执行后，才会初始化子类的变量
const d = new Derived2();
