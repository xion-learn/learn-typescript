// ts 中的特殊导入语法，导入的类型只能被用作类型
import type { Cat } from "./types.ts";
export type Animals = Cat | Dog;

// 作用同上，只是另一种内联写法
import { createCatName, type Dog } from "./types.ts";
