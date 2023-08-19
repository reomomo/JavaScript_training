/**
 * 葉っぱの個数、カエルの総数、それぞれのカエルがジャンプする回数が配列で与えられる
 * （円周上に並んだ葉っぱの上が1，反時計回りに2,3と続く)
 */
const info = [5, 2, 2];

// /**
// * 最初にカエルがいるしげみ
// * (反時計回りにジャンプ。となりが空いていなければ、最も近い空いているしげみにジャンプ)
// * index=1のカエルから順番にジャンプする
// */
const info2 = [1, 2];
const position = info2;
for (let j = 0; j < info[2]; j++) {

  for (let i = 0; i < info[1]; i++) {
    let currentPosition = position[i];
    let newPosition = currentPosition + 1;

    if (newPosition >= 6) {
      newPosition -= info[0];
    }
    while (position.includes(newPosition)) {
      if (newPosition == info[0]) {
        newPosition = 1;
      } else {
        newPosition += 1;
      }
    }
    if (newPosition >= 6) {
      newPosition -= info[0];
    }
    position.push(newPosition);
    position.shift();
  }
}
console.log(position);