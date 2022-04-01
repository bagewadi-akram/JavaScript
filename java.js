const person = {
    name: "abc",
    walk() { console.log(this); }
};
const akram = {
    prof: "develp",
    age: "25",
    disp() { console.log(this); }
};
const pune = {
    place: "maharasrtra",
    dat: 2022,
    dis() { console.log(this); }
};
person.walk();
const walk = person.walk.bind(person);
walk();
pune.dis();
akram.disp();
const akrmm = function(number) { return number * number; };
console.log(akrmm(3));
const akramm = number => number / number;
console.log(akramm(8));
const naam = ['akram', 'bagewadi', 24];
const list = naam.map(naam => `<li>${naam}</li>`);
const epit = [akram.prof, pune.place, pune.dat];
const band = [akram.age, akramm, akrmm];
const combined = epit.concat(band);
console.log(combined);
console.log(band);
console.log(epit);
const clone = [...epit];
console.log(clone);
class ind {
    constructor(names) { this.name = name; }
    nammm() {
        console.log("nammm");
    }
};
console.log(ind);
console.log(8 * null);
console.log("five" * 2); //reports error connot multiply whit int* char
console.log(false == 0); //return true  bcz value of false is 0