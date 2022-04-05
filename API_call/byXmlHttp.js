const request = new XMLHttpRequest();
request.open("get", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = () => {
    if (request.status === 200) {
        console.log("JSON.parse(request.response)");
        console.log(JSON.parse(request.response));
    } else {
        console.log(`error ${request.status}`)
    }
}