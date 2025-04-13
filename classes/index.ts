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
