const mp = new Map()
mp.set('a',1)
mp.set('b',2)
mp.set('c',3)
const st = new Set()
st.add(1)
st.add(2)
st.add(3)
for (let item of mp) console.log(item)
for (let item of st) console.log(item)

// result
// [ 'a', 1 ]
// [ 'b', 2 ]
// [ 'c', 3 ]
// 1
// 2
// 3