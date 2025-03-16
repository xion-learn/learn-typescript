type Fish = { swim: () => void };
type Bird = { fly: () => void };

declare function getSmallPet(): Fish | Bird

// is: 类型谓词
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

let pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}


// 互斥联合，通过 kind 来判断对象属于哪个类型
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea1(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
      case "square":
      return shape.sideLength ** 2;
  }
}

function getArea2(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      // 类型不可再缩小时，其会被推断为 never
      const exhaustiveCheck = shape;
      return exhaustiveCheck;
  }
}
