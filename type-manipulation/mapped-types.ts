type LockedAccount = {
  readonly id: string;
  readonly name: string;
};
// 使用负号操作符移除目标属性的 readonly 约束
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};
// 不添加 readonly 关键字时，会使用泛型的属性类型
type CreateMutable1<Type> = {
  [Property in keyof Type]: Type[Property];
};
type UnlockedAccount = CreateMutable<LockedAccount>; // {id: string, name: string}
type UnlockedAccount1 = CreateMutable1<LockedAccount>; // {readonly id: string, readonly name: string}
let unlockedAccount: UnlockedAccount
let unlockedAccount1: UnlockedAccount1


// 使用 as 操作符可以强行用 as 之后的值覆盖原有 key
// 如果使用 as never，则会移除当前属性
type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};
interface Circle {
  kind: "circle";
  radius: number;
}
type KindlessCircle = RemoveKindField<Circle>;
let kindlessCircle: KindlessCircle
