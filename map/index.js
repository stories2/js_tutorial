const nodes = document.querySelectorAll('div')[0].querySelectorAll('span')

const mapNum = [
    [0, 0, 0, 0],
    [0, 2, 2, 2],
    [0, 0, 2, 0],
    [0, 3, 2, 0]
]

const map = []

const characters = [
    '◼',
    '☃',
    '◻',
    '☘'
]

let x = 1
let y = 0

nodes.forEach((node, idx) => {
    if (Math.floor(idx % 4) === 0) {
        map[Math.floor(idx / 4)] = []
    }
    map[Math.floor(idx / 4)][idx % 4] = node
})

draw()

function draw() {
    map.forEach((row, i) => {
        row.forEach((col, t) => {
            //console.log('row', row, 'i', i, 'col', col, 't', t, map[i][t])
            if (x == t && y == i) {
                col.innerText = characters[1]
            } else {
                col.innerText = characters[mapNum[i][t]]
            }
        })
    })
}

function left() {
    if (x < 0 || mapNum[y][x - 1] == 0) {
        return
    }
    x --;
    draw()
}

//left()

function right() {
		if (x >= 4 || mapNum[y][x + 1] == 0) {
    		return
    }
    x ++;
    draw();
}

//right()

function up() {
	if (y < 0 || mapNum[y - 1][x] == 0) {
  	return
  }
  y --;
  draw()
}

function down() {
	if(y >= 4 || mapNum[y + 1][x] == 0) {
  	return 
  }
  y ++
  draw()
}

window.addEventListener('keydown', (e) => {
console.log('e', e)
})


function isGoal() {
    if (mapNum[y][x] === 3) {
        alert('goal')
    }
}
