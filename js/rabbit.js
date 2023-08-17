// しげみの個数、うさぎの総数、それぞれのうさぎがジャンプする回数が配列で与えられる
let info = [5, 2, 2];
/** 最初にうさぎがいるしげみ
 * （円周上に並んだしげみの上が1，反時計回りに2,3と続く)
 */
let info2 = [1, 2];

class Place {
  #bush; // しげみ
  
  constructor(bush) {
    this.#bush = bush;
  }
  get bush() {
    return this.#bush;
  }
  set bush(bush) {
    this.#bush = bush;
  }
  
  bush
}

console.log(info2[0]);