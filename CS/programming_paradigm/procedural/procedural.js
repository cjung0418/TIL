// 최대값 찾기
const nums = [1, 2, 3, 4, 5, 11, 14]
let a = 0
for (let i = 0; i < nums.length; i++) {
  a = Math.max(nums[i], a)
}

console.log(a) // 14