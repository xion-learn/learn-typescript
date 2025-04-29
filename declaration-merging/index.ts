interface Box {
  height: number;
  width: number;
}
interface Box {
  scale: number;
}
// 多个同名 interface 将会合并
let box: Box = { height: 5, width: 6, scale: 10 };


namespace Animal {
  let haveMuscles = true;
  export function animalsHaveMuscles() {
    return haveMuscles;
  }
}
namespace Animal {
  export function doAnimalsHaveMuscles() {
    return haveMuscles; // 未导出的命名空间值，只在原始命名空间中可见
  }
}


// 命名空间可以和同名类合并
class Album {
  label: Album.AlbumLabel;
}
namespace Album {
  export class AlbumLabel {}
}