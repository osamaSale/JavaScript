const result = []
axios.get('http://localhost:5000/users', {
    firstName: 'Fred',
    lastName: 'Flintstone'
})
    .then(function (response) {
        console.log(response);
        return result.push(response.result)
    })
    .catch(function (error) {
        console.log(error);
    });


