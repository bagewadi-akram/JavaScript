async function getUser() {
    let Response = await fetch('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0');
    let data = await Response.json();
    return data;
}
getUser().then(Response => {
    console.log(Response)
});




$('#search-input ').on('keyup', function() {
    var value = $(this).val()
    console.log('value:', value)
    var data = searchTable(value, myArray)
    buildTable(data)
})



buildTable(myArray)


function searchTable(value, data) {
    var filteredData = []
    for (var i = 0; i < data.length; i++) {
        value = value.tolowerCase()
        var name = data[i].name.tolowerCase()
        if (name.includes(value)) {
            filteredData.push(data[i])

        }
    }
    return filteredData
};

var myArray = []


$.ajax({
    method: 'GET',
    url: 'https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0',
    success: function(response) {
        myArray = response
        console.log(response)
        buildTable(myArray)
    }
})



function buildTable(data) {
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for (var i = 0; i < 24; i++) {
        var row = `<tr>
							<td>${data[i].timepoint}</td>
							<td>${data[i].cloudcover}</td>
							<td>${data[i].seeing}</td>
                            <td>${data[i].transparency}</td>
							<td>${data[i].lifted_index}</td>
							<td>${data[i].rh2m}</td>
                            <td>${data[i].wind10m}</td>
							<td>${data[i].temp2m}</td>
							<td>${data[i].prec_type}</td>
					  </tr>`
        table.innerHTML += row


    }
}