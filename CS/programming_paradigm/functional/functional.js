// Array.prototype.reduce()를 사용하여 최댓값 찾기
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// reduce: Array를 받아서 누적한 결괏값을 반환하는 함수
const res = [1, 2, 3, 4, 5, 11, 12].reduce((max,num) => num > max ? num : max, 0)
console.log(res)

// pure function
const pure = (a, b) => {
  return a + b
}