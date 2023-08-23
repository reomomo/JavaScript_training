/**
 * どこに投げ縄を投げると多くの牛が捕まえられるか
 */

const H = 7; // 牧場面積を表すグリッドの縦幅
const W = 6; // 牧場面積を表すグリッドの横幅
const hw1 = [0,0,5,2,4,4]; // 牧場グリッド1段目の牛の数
const hw2 = [4,5,0,0,5,3]; // 牧場グリッド2段目の牛の数
const hw3 = [4,2,5,5,0,0]; // 牧場グリッド3段目の牛の数
const hw4 = [0,4,2,7,1,0]; // 牧場グリッド4段目の牛の数
const hw5 = [4,2,5,0,1,5]; // 牧場グリッド5段目の牛の数
const hw6 = [5,2,1,3,0,5]; // 牧場グリッド6段目の牛の数
const hw7 = [6,2,4,6,0,0]; // 牧場グリッド7段目の牛の数
const aryRanch = [];
const R = 2; // 投げ縄の形状を表すグリッドの縦幅
const C = 3; // 投げ縄の形状を表すグリッドの横幅
// 投げ縄のどこで捕獲できるか　#は捕獲可能、*は捕獲不可
const rc1 = ["#", "*", "#"];
const rc2 = ["*", "#", "*"];
const aryNet = [];

hw1.forEach((e) => {
  aryRanch.push(e);
});
hw2.forEach((e) => {
  aryRanch.push(e);
});
hw3.forEach((e) => {
  aryRanch.push(e);
});
hw4.forEach((e) => {
  aryRanch.push(e);
});
hw5.forEach((e) => {
  aryRanch.push(e);
});
hw6.forEach((e) => {
  aryRanch.push(e);
});
hw7.forEach((e) => {
  aryRanch.push(e);
});

rc1.forEach((e) => {
  aryNet.push(e);
});
rc2.forEach((e) => {
  aryNet.push(e);
});

let count = 0;
const ans = [];
for (let e = 0; e < ((H - (R - 1)) * W); e += W) {
  for (let num = 0; num < W - (C - 1); num++) {
    let n = num + e;
    for (let i = 0; i < (R * C); i++) {
      if (i % C === 0 && i != 0) {
        n += W - C;
      }
      if (aryNet[i] == "#") {
        count += Number(aryRanch[n + i]);
      }
    }
    ans.push(count);
    count = 0;
  }
}
console.log(ans);
ans.sort(function(first, second){
  return first - second;
});
console.log(ans.slice(-1)[0]);
