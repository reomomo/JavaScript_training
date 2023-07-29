class Cat {

  #name;
  #gender;
  #age;

  constructor(name = "名無し", gender = "不明", age = 0) {
    this.#name = name;
    this.#gender = gender;
    this.#age = age;
  }

  // 年齢を取得するアクセサ（ゲッター）
  get age() {
    return this.#age; //プロパティの値を返す
  }

  // 年齢を設定するアクセサ（セッター）
  // set age(age) {
  //   this.#age = age; // 渡された値をプロパティにセットする
  // }

  // ゲッター。プロパティの値をそのまま返さず、プロパティの値に応じて加工・編集を行った文字列を返す
  get gender() {
    // seibetuに応じた文字列を返す
    if (this.#gender === "female") {
      return "女の子";
    } else {
      return "男の子";
    }
  }

  // セッター。データ型や値の妥協性をチェックして、プロパティに有効な値がセットされるように配慮した例
  set age(age) {
    // 0以上の整数のみ受け付ける
    if (Number.isInteger(age) && 0 <= age) {
      this.#age = age;
    }
  }
}

const cat = new Cat("ティナ", "female", 3);

cat.age = 4;
console.log(cat.age + "歳");
// ゲッターが無いと、undefined歳
// セッターが無いと、3歳のまま
// アクセサを呼び出して間接的にプロパティ#ageにアクセスしている

console.log("この子は" + cat.gender + "です"); // => この子は女の子です

cat.age = "5" //文字列なのでセットされない
console.log(cat.age + "歳");
