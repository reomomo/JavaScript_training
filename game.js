// 主人公クラス
class Player {
  #energy; //体力
  #power; //攻撃力
// }コンストラクタ
  constructor(energy, power) {
    this.#energy = energy;
    this.#power = power;
  }
  // アクセサ
  get energy() {
    return this.#energy;
  }
  set energy(energy) {
    this.#energy = energy;
  }
  get power() {
    return this.#power;
  }
  set power(power) {
    this.#power = power;
  }
  attack(enemy) {
    if (Math.random() < 0.3) {
      // 30%の確率で体力を6回復
      this.#heal(6);
    } else {
      // それ以外の場合、攻撃して相手の体力を減らす
      enemy.energy -= this.power;
      console.log(this.power + "のダメージを与えた！");
    }
  }
  #heal(recovery) {
    this.energy += recovery;
    console.log(recovery + "回復した！");
  }
}

// ドラゴンクラス
class Dragon extends Player {
  // コンストラクタ
  constructor(energy, power) {
    super(energy, power);
  }
  // 攻撃
  attack(enemy) {
    enemy.energy -= this.power;
    console.log(this.power + "のダメージを与えた！");
  }
}

const player = new Player(15, 5); //体力：15，攻撃力：5
const dragon = new Dragon(25, 4); //体力：25, 攻撃力：4
// どちらかの体力が尽きるまで戦う
while (player.enegy > 0 && dragon.enegy > 0) {
  // 主人公の行動
  console.log("あなたの攻撃！\n");
  player.attack(dragon);
  if (dragon.energy <= 0) {
    console.log("ドラゴンを倒した！");
    break;
  }
  // ドラゴンの行動
  console.log("ドラゴンの攻撃！\n");
  dragon.attack(player);
  if (player.energy <= 0) {
    console.log("ドラゴンに敗れた！");
    break;
  }
}