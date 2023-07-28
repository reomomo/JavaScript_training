const apple = {
  variety: "ジョナゴールド", // 品種
  sugar_content: 15, // 糖度
  made_in: ["青森県"] // 産地
}
console.log(apple.variety);
apple.made_in.push("岩手県");
console.log(apple.made_in);
console.log(apple.made_in.length());

const cat = {
  name: "メル",
  gender: "female",
  age: 2,
  meow() {
    console.log("にゃー");
  },
  eat(fish) {
    console.log(fish + "おいしいにゃー");
  },
  sleep() {
    console.log("ねむいにゃー");
  },
  walk() {
    console.log("散歩大好きにゃー")
  },
  favorite_foods: {
    name: "シャケ",
  }
}
console.log(cat.meow());
console.log(cat.walk());
console.log(cat.eat("サンマ"));
console.log(cat.favorite_foods.name);