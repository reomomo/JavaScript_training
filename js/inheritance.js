class Car {
  #speed;
  constructor(speed = 0) {
    this.#speed = speed;
  }
  run() {}
  stop() {}
}
class AirCar extends Car {
  #altitude; // 高度
  constructor(speed = 0, altitude = 0) {
    super(speed); // スーパークラスのコンストラクタを呼び出す
    this.#altitude = altitude;
  }

  fly() {
    this.#altitude += 5000; //高度を上げて浮上する
    super.run(); // スーパークラスののメソッドを利用する。空中を走る
  }
  land() {
    this.#altitude = 0; // 高度を下げて着陸する
    super.stop(); // スーパークラスののメソッドを利用する。陸上で停止する
  }
}

// サブクラス自身のメソッド利用時 => this.メソッド名();
// スーパークラスのメソッド利用時 => super.メソッド名();