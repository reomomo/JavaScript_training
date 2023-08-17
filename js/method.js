// オブジェクトの動作を定義する関数
// 自己紹介のメソッドを実装する

class Cat {

  #name;
  #gender;
  #age;

  constructor(name = "名無し", gender = "不明", age = 0) {
    this.#name = name;
    this.#gender = gender;
    this.#age = age;
  }
  
  get gender() {
    // seibetuに応じた文字列を返す
    if (this.#gender === "female") {
      return "女の子";
    } else {
      return "男の子";
    }
  }

  // 自己紹介のメソッド
  selfIntroduce() {
    console.log("私は" + this.#name + "です");
    console.log("私は" + this.#gender + "です");
    console.log("私は" + this.gender + "です");
  }
}

const cat = new Cat("ティナ", "female", 3);

cat.selfIntroduce(); // => 私はティナです
// => 私はfemaleです
// => 私は女の子です