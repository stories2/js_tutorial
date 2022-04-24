console.log(document.querySelectorAll('div')[0].querySelectorAll('span')[0])

const nodes = document.querySelectorAll('div')[0].querySelectorAll('span')

const map = []

nodes.forEach((node, idx) => {
map[Math.floor(idx / 4)][idx % 4] = node
})

console.log(map)
