// from the default lib:
interface Disposable {
  [Symbol.dispose](): void;
}

// usage:
class TraceActivity implements Disposable {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
    console.log(`Entering: ${name}`);
  }
  [Symbol.dispose](): void {
    console.log(`Exiting: ${name}`);
  }
}

function f() {
  // 可以使用 using 进行变量声明，声明变量的作用域销毁时，自身也会被销毁
  using _activity = new TraceActivity("f");
  console.log("Hello world!");
}

f();
// prints:
//   Entering: f
//   Hello world!
//   Exiting: f
