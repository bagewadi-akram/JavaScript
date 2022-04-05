calback = x => console.log("this is call back function");
calback2 = y => console.log("ok");
// calling function in a function
calback2(calback());

//call back function 
//delivered at the end 
setTimeout(function() { func("Call back function with 5s timer"); }, 5000);
func = value => console.log(value);
// promise 
let prom = new Promise(function(myResolve, myReject) {
    let x = 2;
    x = 0;
    x = 3;

    if (x == 0) {
        myResolve("OK... [returned as promised x==0]");
    } else {
        myReject("Error..[returned as promised x!=0]");
    }
});

prom.then(
    function(value) { myDisplayer(value); },
    function(error) { myDisplayer(error); }

);
console.log(prom);
//promises 
const epit = new Promise((resolve, reject) => {
    resolve('Ok tested')
})
const akram = new Promise((resolve, reject) => {
    resolve('Made in EPIT')
})
const task1 = new Promise((resolve, reject) => {
    resolve('No further Testing required.')
})
Promise.race([
    epit,
    akram,
    task1
]).then((message) => {
    console.log("This product is " +
        message)
});
Promise.all([
    epit,
    akram,
    task1
]).then((message) => {
    console.log("This product is " +
        message)
});

console.log("..................... async/await...........");
async function akraam() {
    console.log("inside async func");
    const reponse = await fetch('https://github.com/bagewadi-akram/JavaScript');
    const user = await Response.json();
    console.log('users resolved')
    return user;
}
console.log("start")
let m = akraam();
console.log(m);
m.then(data => console.log(data))
console.log("ended now await is printed ")