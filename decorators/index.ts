declare function classDecorator(target: any): void
declare function propertyDecorator(target: any, propertyKey: string): void
declare function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor): void
declare function parameterDecorator(target: any, propertyKey: string, parameterIndex: number): void
declare function accessorDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor): void

// 类装饰器
@classDecorator
class Bird {

  // 属性装饰器
  @propertyDecorator
  name: string;

  // 方法装饰器
  @methodDecorator
  fly(
    // 参数装饰器
    @parameterDecorator
      meters: number
  ) {}

  // 访问器装饰器
  @accessorDecorator
  get egg() { return }
}