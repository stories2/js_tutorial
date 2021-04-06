function func(a, b, c) {
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
}

func(1, 2, 3);

func(...'123');

const arr = [4, 5, 6];

func(...arr);

let obj = {
    a: 1,
    b: 'hello',
    text: 'world'
}

const obj2 = {
    d: 14,
    c: 'test',
    text: 'replaced'
}

obj['text'] = obj2.text;
obj['d'] = obj2.d;
obj['c'] = obj2.c;

obj = {
    ...obj,
    ...obj2
}

console.log('obj', obj);

console.log(`Array.from string`, Array.from('string'));
console.log(`Array.from int array with modify`, Array.from([1, 2, 3, 4], val => val * 2));
// h    e   l   l   o
// 104  101 108 108 111
// m    j   q   q   t
// 109  106 113 113 116
console.log(`Change hello`, 
    Array.from('hello', val => String.fromCharCode((val.charCodeAt(0) - 97 + 5) % 26 + 97)));

let [e, f] = [1, 2];
console.log(`e: ${e}, f: ${f}`);

[e, f] = [f, e];
console.log(`e: ${e}, f: ${f}`);

let [ , passed] = [e, f];
console.log(`passed: ${passed}`);

let [idx1, idx2, ...array] = [1, 2, 3, 4, 5];
console.log(`idx1: ${idx1}, idx2: ${idx2}, array:`, array);

const obj3 = {
    sample: 'hello',
    text: 'hi'
}

let sample, text, defaultVal;

console.log(`sample: ${sample}, text: ${text}`);

({
    sample,
    text
} = obj3);

console.log(`sample: ${sample}, text: ${text}`);

({
    sample,
    text,
    defaultVal = 'this is default'
} = obj3);

console.log(`sample: ${sample}, text: ${text}, defaultVal: ${defaultVal}`);

({
    text: sample,
    text,
    defaultVal = 'this is default'
} = obj3);

console.log(`sample: ${sample}, text: ${text}, defaultVal: ${defaultVal}`);

let set = new Set(['hi']);
console.log(`Has hi ? ${set.has('hi')}, has hello ? ${set.has('hello')}, has world ? ${set.has('world')}, size: ${set.size}`);
set.add('hello');
console.log(`Has hi ? ${set.has('hi')}, has hello ? ${set.has('hello')}, has world ? ${set.has('world')}, size: ${set.size}`);
set.add('world');
console.log(`Has hi ? ${set.has('hi')}, has hello ? ${set.has('hello')}, has world ? ${set.has('world')}, size: ${set.size}`);

func(...set);

console.log(`values:`, set.values());
console.log(`keys:`, set.keys());
console.log(`delete hi`, set.delete('hi'));
console.log(`Has hi ? ${set.has('hi')}, has hello ? ${set.has('hello')}, has world ? ${set.has('world')}, size: ${set.size}`);
console.log(`values:`, set.values());
console.log(`keys:`, set.keys());

let sampleObj = {hi: 'hello'}
let sampleObj2 = {lucky: 7}
let sampleSpreadObj = {}

let weakSet = new WeakSet([sampleObj])
console.log(`Has sampleObj ? ${weakSet.has(sampleObj)}, has sampleObj2 ? ${weakSet.has(sampleObj2)}`);
weakSet.add(sampleObj2);
console.log(`Has sampleObj ? ${weakSet.has(sampleObj)}, has sampleObj2 ? ${weakSet.has(sampleObj2)}`);
weakSet.delete(sampleObj);
console.log(`Has sampleObj ? ${weakSet.has(sampleObj)}, has sampleObj2 ? ${weakSet.has(sampleObj2)}`);

const echoHi = function() {
    console.log('Hi');
}
echoHi();

const arrowFuncHi = () => console.log('Hi');
arrowFuncHi();

function Cat() {
    this.sound = 'meow';
    console.log('Cat this', this);

    setTimeout(function say() {
        console.log(`Cat say: ${this.sound}`, this);
    }, 3000);

    setTimeout(() => {
        console.log(`Cat say: ${this.sound}`, this);
    }, 3000);
}

const cat = new Cat();

function callbackFunc(msg, callback) {
    console.log(`msg: ${msg}`);
    callback();
}

callbackFunc('processing', function() {
    callbackFunc('done', function() {
        console.log('exit');
    })
})

function promiseFunc(msg) {
    return new Promise((resolve, rejected) => {
        console.log(`msg: ${msg}`);
        resolve();
    })
}

function promiseReject(msg) {
    return new Promise((resolve, rejected) => {
        console.log(`msg: ${msg}`);
        rejected('error');
    })
}

promiseFunc('processing')
    .then(promiseFunc('done'))
    .then(promiseReject('error').catch(err => console.log('err:', err)))
    .then(() => {
        console.log('exit');
    })

function returnDoubleVal(val) {
    return new Promise(resolve => {
        resolve(val * 2);
    })
}

returnDoubleVal(2)
    //      4
    .then(val => returnDoubleVal(val))
    //      8
    .then(val => returnDoubleVal(val))
    //      16
    .then(val => returnDoubleVal(val))
    //      32
    .then(val => returnDoubleVal(val))
    //      64
    .then(val => console.log(val));