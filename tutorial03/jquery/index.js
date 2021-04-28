$(document).ready(function() {
    var i = 0, t = 0, n = 7;
    for(i = 0; i < n; i ++) { 
        var rowP = $("<p style='margin:0px'></p>").appendTo("body");
        var starSize = (Math.floor(n / 2) - Math.abs((Math.floor(n / 2) - i))) * 2 + 1;
        console.log(`star size: ${starSize}`);
        for(t = 0; t < n; t ++) {
            if (Math.floor(n / 2) - Math.floor(starSize / 2) <= t && t <= Math.floor(n / 2) + Math.floor(starSize / 2)) {
                $("<span>■</span>").appendTo(rowP);
            } else {
                $("<span>□</span>").appendTo(rowP);
            }
        }
    }
});