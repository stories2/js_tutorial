var a = 10 + 5;
var b = 10 + .2;
var c = false + 4;
var d = true + 5;
var e = false + true;
var f = null + 1;

console.table({
    a, b, c, d, e, f
}, ['a', 'b', 'c', 'd', 'e', 'f'])

var g = 10 - 5;
var h = 10 - .2;
var i = false - 4;
var j = true - 5;
var k = false - true;
var l = null - 1;

console.table({
    g, h, i, j, k, l
}, ['g', 'h', 'i', 'j', 'k', 'l'])

var n = 10 * 5;
var m = 10 * .2;
var o = false * 4;
var p = true * 5;
var q = false * true;
var r = null * 1;

console.table({
    n, m, o, p, q, r
}, ['n', 'm', 'o', 'p', 'q', 'r'])

var s = 10 / 5;
var t = 10 / .2;
var u = false / 4;
var v = true / 5;
var w = false / true;
var x = null / 1;

console.table({
    s, t, u, v, w, x
}, ['s', 't', 'u', 'v', 'w', 'x'])

var y = 10 % 4;
var z = true % 4;
var aa = false % true;
var ab = null % 2;

console.table({
    y, z, aa, ab
}, ['y', 'z', 'aa', 'ab'])

var ac = 10 ** 2;
var ad = 2 ** false;
var ae = 2 ** true;
var af = 2 ** null;

console.table({
    ac, ad, ae, af
}, ['ac', 'ad', 'ae', 'af'])

var ag = 10 * 'foo';
var ah = Infinity / 0;
var ai = Infinity + Infinity;
console.table({
    ag, ah, ai
}, ['ag', 'ah', 'ai'])

var aj = 'hello' + 'world';
console.log(`aj: ${aj}, aj + 4: ${aj + 4}`);

var ak = 4;
var al = 5;
var ak = ak + al;
var an = 4;
var am = 5;
an += am;
console.log(`ak: ${ak}, an: ${an}, ak === an ? ${ak === an}`);

var ao = 1;
var ap = 2;

// 1 * 2 + (++1 + 2++ + 1)
// 1 * 2 + (2 + 2++ + 1)
// 1 * 2 + (5++)
// 1 * 2 + 6
// 1 * 2 + 6
// 8
console.log(ao * ap + (++ao + ap++ + ao))

function funcA() {
    console.log('This is funcA');
}
funcA();

(function funcB() {
    console.log('This is funcB');
})();

var funcC = function() {
    console.log('This is funcC');
};
funcC();

var ar = {
    func: funcC
}
console.log(`Function in ar: ${ar.func}`);

var funcD = function(text) {
    console.log(`Text: ${text}`);
}
funcD('Hello World');

var funcE = function(...args) {
    console.log(`args: ${args}, args.length: ${args.length}, args[0]: ${args[0]}`);
}
funcE(1, 2, 3, 4, 'Hello')

var map = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 0, 0, 1],
    [2, 1, 1, 1]
]
var startY = 0;
var startX = 1;

(function routeFinder(x, y, map, cnt) {
    if (y < 0 || y >= map.length || x < 0 || x >= map[y].length || map[y][x] < 0 || map[y][x] === 1) {
        return;
    }
    cnt--;
    if (map[y][x] === 2) {
        map[y][x] = cnt;
        console.log(`Done! ${Math.abs(cnt)}`, map);
        return;
    }
    map[y][x] = cnt;
    // go top
    routeFinder(x, y - 1, map, cnt);
    // go right
    routeFinder(x + 1, y, map, cnt);
    // go bottom
    routeFinder(x, y + 1, map, cnt);
    // go left
    routeFinder(x - 1, y, map, cnt);
})(startX, startY, map, 0)