async function getUser() {
    let Response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await Response.json();
    return data;
}
getUser().then(Response => {
    console.log("Call by Fetch api");
    console.log(Response)

})