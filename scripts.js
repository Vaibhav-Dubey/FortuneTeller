function makeAPICall() {
    // Make an API call using fetch
    fetch('https://w92ejsrxm9.execute-api.us-east-2.amazonaws.com/prod/')
        .then(response => response.json())
        .then(data => {
            // Display the response in an alert
            alert(data.body);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while fetching data from the API');
        });
}
