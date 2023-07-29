class Cat {
  // プロパティ
  #name;
  #gender;
  #age;
  // コンストラクタ
  constructor(name = "名無し", gender = "不明", age = 0) {
    this.#name = name; // デフォルトは名無し
    this.#gender = gender; // デフォルトは不明
    this.#age = age; // デフォルトは0歳
  }
}

// const cat = new Cat(); // 名無し、性別不明、0歳の猫になる
const cat = new Cat("ティナ", "female", 3);

console.log(cat); // => Cat {#name: 'ティナ', #gender: 'female', #age: 3}
// #age : 3
// #gender : "female"
// #name : "ティナ"
// [[Prototype]] : Object

console.log(cat.name); // => undefined