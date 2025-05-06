let list = [4, 5, 6];

// for..in 用于遍历对象，因此可以遍历数组
for (let i in list) {
  console.log(i); // "0", "1", "2",
}

// for..of 用于遍历可迭代对象，因此也可以遍历数组
for (let i of list) {
  console.log(i); // 4, 5, 6
}


let s = 'abc';
// 甚至可以使用 for..in 遍历字符串，虽然 ts 会发出警告
for (let i in s) {
  console.log(i); // "0", "1", "2",
}
for (let i of s) {
  console.log(i); // "a", "b", "c",
}
