function fontsize() {
    document.getElementById("demo1").style.fontSize = "35px";
}

function hidecontent() {
    document.getElementById("demo1").style.display = "none";
}

function showcontent() {
    document.getElementById("demo1").style.display = "block";
}

function changecontent() {
    document.getElementById("demo1").innerHTML = "Hello!! A msg by EPIT";
}

function changecontent() {
    document.getElementById("demo1").innerHTML = "Hello!! A msg by EPIT";
}
const value = {
    x: 3,
    y: 6,
    a: "EP",
    b: "IT",
    add: function() {
        return this.x + this.y;
    },
    mult: function() {
        return this.x * this.y;
    },
    assig: function() {
        return this.x += 10;
    },
    prod: function() {
        return this.x / this.y;
    },
    con: function() {
        return this.a + " " + this.b;
    },
    per: function() {
        return this.x % this.y;
    },
    sub: function() {
        return this.x - this.y;
    }

};
document.getElementById('plus ').innerHTML = value.add();
document.getElementById('multi ').innerHTML = value.mult();
document.getElementById('assign ').innerHTML = value.assig();
document.getElementById('prod ').innerHTML = value.prod();
document.getElementById('con ').innerHTML = value.con();
document.getElementById('per ').innerHTML = value.per();
document.getElementById('sub ').innerHTML = value.sub();