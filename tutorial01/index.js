console.log('Hello World!')

var a = 1;
var b = 'str';
var c = 12.3;
var d = {
    key: 'value'
};
var f = [1, 2, 3]

console.log(`a: ${a} typeof a : ${typeof a}`);
console.log(`b: ${b} typeof b : ${typeof b}`);
console.log(`c: ${c} typeof c : ${typeof c}`);
console.log(`d: ${d} typeof d : ${typeof d}`);
console.log(`f: ${f} typeof f : ${typeof f}`);

var g = undefined;

console.log(`g: ${g} typeof g : ${typeof g}`);

var h = null;

console.log(`h: ${h} typeof h : ${typeof h}`);

console.log(`g == h ? : ${g == h}`);
console.log(`g === h ? : ${g === h}`);

console.time();
console.log('This is console.log()');
console.assert(3 + 4 == 6, 'Test failed 3 + 4 != 6');
console.table([
    {
        a: 1,
        b: 2
    },
    {
        a: 3,
        b: 4
    }
], ['a', 'b']);
console.timeEnd();

var h1 = document.querySelector('h1');
console.log('h1', h1, h1.textContent);

h1.addEventListener('click', function(e) {
    if (e.target.innerText === 'You clicked me') {
        // e.target.remove()
        window.location = 'https://google.com'
    }
    e.target.innerText = 'You clicked me';
});

console.log(`window.outerWidth: ${window.outerWidth}, window.outerHeight: ${window.outerHeight}`);

var evt = new MouseEvent('click');
h1.dispatchEvent(evt);

h1.addEventListener('myEvent', function(e) {
    console.log('myEvent', e);
})
var myEvent = new CustomEvent('myEvent', {
    detail: 'Hello World'
});
h1.dispatchEvent(myEvent);
document.addEventListener('keydown', function (e) {
    console.log('keydown', e);
})

var arr1 = [1, 2, 3];
console.log('arr1', arr1);
var arr2 = [1, '2', {key: 'value'}, arr1]
console.log('arr1', arr2);

var arr3 = Array(4);
console.log('arr3', arr3);
var arr4 = Array.from(Array(4).keys());
console.log('arr4', arr4);
var arr5 = [...Array(4).keys()]
console.log('arr5', arr5);
var arr6 = Array(4).fill(0);
console.log('arr6', arr6);