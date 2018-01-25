function search() {
    // Send an XhR2 query. 
    var queryURL = "https://jsonplaceholder.typicode.com/users";

    var xhr = new XMLHttpRequest();
    xhr.open('GET', queryURL, true);

    xhr.onload = function(e) {
        //console.log("Response arrived");
        // Turn data into javascript object
        var users = JSON.parse(xhr.response);
        //console.log("first user: " + JSON.stringify(users[0]));

        displayUsersAsTable(users);
    }

    xhr.send();
}

function displayUsersAsTable(users) {
    // user is a javascript object

    // empty the div that contains the results
    var userDiv = document.querySelector("#second");
    userDiv.innerHTML = "";

    // creates and populate the table with users
    var table = document.createElement("table");

    users.forEach(function(currentUser) {
        //console.log(currentUser.name);

        var row = table.insertRow();
        row.innerHTML = "<td>" + currentUser.name + "</td><td>" + 
        currentUser.email + "</td>";       
        
    });

    // Add table to div
    userDiv.appendChild(table);
}

    // Fetch API


function searchAPI() {
    var queryURL = "https://jsonplaceholder.typicode.com/users";

    fetch(queryURL)
            .then(function (response) {
                // response.json() returns a json string,
                // returning it will convert it 
                // to a pure JavaScript 
                // object for the next then's callback
                return response.json();
            })
            .then(function (users) {
                // users is a JavaScript object here
                displayUsersAsATable(users);
            })
            .catch(function (error) {
                console.log('Error during fetch: ' + error.message);
            });
}

function displayUsersAsATable(users) {
    // users is a JavaScript object

    // empty the div that contains the results
    var usersDiv = document.querySelector("#users");
    usersDiv.innerHTML = "";

    // creates and populate the table with users
    var table = document.createElement("table");

    // iterate on the array of users
    users.forEach(function (currentUser) {
        // creates a row
        var row = table.insertRow();
        // insert cells in the row
        var nameCell = row.insertCell();
        nameCell.innerHTML = currentUser.name;
        var cityCell = row.insertCell();
        cityCell.innerHTML = currentUser.address.city;
    });

    // adds the table to the div
    usersDiv.appendChild(table);
}

