function callAPI() {
  fetch("https://reqres.in/api/users")
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response.parameter);
    });
}

async function callAPI_Async() {
    let apiReturn = await fetch("https://reqres.in/api/users");
    let apiJson = await apiReturn.json();
    console.log(apiJson.parameter);
}
