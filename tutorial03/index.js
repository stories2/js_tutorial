var a = 3;

if (a === 1) {
    console.log('a === 1');
} else if (a === 2) {
    console.log('a === 2');
} else if (a === 3) {
    console.log('a === 3');
} else if (a === 4) { 
    console.log('a === 4');
} else {
    console.log('a ?');
}

var b = undefined;
var c = null;
var d = '';
var e = 0;

if (b) {
    console.log('b is true');
} else {
    console.log('b is false');
}

if (c) {
    console.log('c is true');
} else {
    console.log('c is false');
}

if (d) {
    console.log('d is true');
} else {
    console.log('d is false');
}

if (e) {
    console.log('e is true');
} else {
    console.log('e is false');
}

for(var f = 0; f < 5; f ++) {
    if (f === 1) { 
        f++;
        continue;
    }
    console.log(`f = ${f}`);
}

var g = 0;
while(g < 5) {
    console.log(`g = ${g}`);
    g ++;
}

var h = [1, 4, 2, 3]
for (var attr in h) {
    console.log(`attr: ${attr}`);
}

for (var val of h) {
    console.log(`val: ${val}`);
}
window.onload = function () {
    /* ---- particles.js config ---- */

    particlesJS("particles-js", {
        "particles": {
        "number": {
            "value": 380,
            "density": {
            "enable": true,
            "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
            "width": 0,
            "color": "#000000"
            },
            "polygon": {
            "nb_sides": 5
            },
            "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
            }
        }
        },
        "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
            "enable": true,
            "mode": "grab"
            },
            "onclick": {
            "enable": true,
            "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
            "distance": 140,
            "line_linked": {
                "opacity": 1
            }
            },
            "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
            },
            "repulse": {
            "distance": 200,
            "duration": 0.4
            },
            "push": {
            "particles_nb": 4
            },
            "remove": {
            "particles_nb": 2
            }
        }
        },
        "retina_detect": true
    });
}