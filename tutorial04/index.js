if (true) {
    var a = 2;
}
b = 4
console.log(`a = ${a}, b = ${b}, c = ${c}`);
var b;
var c = 5;
console.log(`a = ${a}, b = ${b}, c = ${c}`);

var a = 1;
var a = 2;
var a = 3;
console.log(`a = ${a}`);

// let d = 1;
// let d = 2;
// let d = 3;
// console.log(`d = ${d}`);

if (true) {
    var a = 2;
}

console.log(`a = ${a}`);

if (true) {
    let f = 3;
}
// console.log(`f = ${f}`);

var j = k;
var k = 4;
console.log(`j = ${j}, k = ${k}`);

// let h = i;
// let i = 2;
// console.log(`h = ${h}, i = ${i}`);

// const l = 4;
// l = 6;
// console.log(`l = ${l}`);

function scope1() {
    let hello = 'Hi';
    function scope2() {
        return hello;
    }
    return scope2;
}

const scopeFunc = scope1();
console.log(`scopeFunc() = ${scopeFunc()}`);

var obj = {hi: 'hello'};
console.log('obj', obj);
var obj = new Object({hi: 'hello'});
console.log('obj', obj);

console.log('global this', this);

let scopeObj = {
    a: 5,
    func: function() {
        console.log(`this.a from scopeObj: ${this.a}`);
    }
};
scopeObj.func();

class Rectangle {
    width = 0;
    #height = 0;

    constructor(width, height) {
        this.width = width;
        this.#height = height;
    }

    getSize() {
        return this.width * this.#height;
    }
}

let rect = new Rectangle(30, 40);
console.log(`rect`, rect);
console.log(`rect.getSize() = ${rect.getSize()}`);
// console.log(`width, height = ${rect.width}, ${rect.#height}`);

class Animal {
    #age = 0;
    #weight = 1;

    constructor(age, weight) {
        this.#age = age;
        this.#weight = weight;
    }

    set age(age) {
        this.#age = age;
    }

    set weight(weight) {
        this.#weight = weight;
    }

    get age() {
        return this.#age;
    }

    get weight() {
        return this.#weight;
    }

    eat(meatWeight) {
        this.#weight += meatWeight;
        console.log(`Eat meat ${meatWeight}. Now weight: ${this.#weight}`);
    }

    gettingOld() {
        this.#age ++;
        console.log(`Update age: ${this.#age}`);
    }
}

class Dog extends Animal{
    #name = '';
    constructor(age, weight, name) {
        super(age, weight);
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    bark() {
        console.log(`Wang!`);
    }
}

class NyanCat extends Animal {
    constructor(age, weight) {
        super(age, weight);
    }

    meow() {
        console.log(`Nyan!`);
    }
}

let dog = new Dog(2, 5, 'Shiba');
console.log(`Dog age = ${dog.age}, weight = ${dog.weight}, name = ${dog.name}`);
dog.eat(1.5);
dog.gettingOld();
dog.bark();

let cat = new NyanCat(3, 4);
console.log(`Cat age = ${cat.age}, weight = ${cat.weight}`);
cat.eat(2);
cat.gettingOld();
cat.meow();

console.log(`Number('123.4') = ${Number('123.4')} type ${typeof Number('123.4')}`);
console.log(`Number('hello?') = ${Number('hello?')} type ${typeof Number('hello?')}`);
console.log(`parseInt('123.4') = ${parseInt('123.4')} type ${typeof parseInt('123.4')}`);
console.log(`parseFloat('123.4') = ${parseFloat('123.4')} type ${typeof parseFloat('123.4')}`);

console.log(`String(123.4) = ${String(123.4)} type ${typeof String(123.4)}`);
console.log(`123.4.toString() = ${123.4.toString()} type ${typeof 123.4.toString()}`);
console.log(`\`123.4\` = ${`${123.4}`} type ${typeof `${123.4}`}`);


const valve = {
    open: function() {
        console.log('valve open');
    },
    close: function() {
        console.log('valve close');
    }
}
console.log('valve', valve);

const gasRange = Object.create(valve);
gasRange.fire = 'max';
gasRange.gas = 40;
gasRange.controlGas = function() {
    console.log('change gas power', this.fire);
}
gasRange.startFire = function() {
    console.log('start fire');
}
console.log('gasRange', gasRange);

const aFishShapedBun = Object.create(gasRange);
aFishShapedBun.shape = 'Fish';
aFishShapedBun.redBean = 'Little';

aFishShapedBun.cooking = function() {
    console.log('cooking fish shaped bread')
}
aFishShapedBun.flip = function() {
    console.log('flip fish shaped bread')
}

console.log('aFishShapedBun', aFishShapedBun);