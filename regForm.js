// Get the form element
var form = document.getElementById('registrationForm');

// Add event listener for form submission
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var callDate = document.getElementById('callDate').value;
    var callTime = document.getElementById('callTime').value;

    // Create an object to store the form details
    var formData = {
        name: name,
        email: email,
        phone: phone,
        callDate: callDate,
        callTime: callTime
    };

    // Get existing form data from local storage or create an empty array if it doesn't exist
    var storedData = localStorage.getItem('formData');
    var formDataArray = storedData ? JSON.parse(storedData) : [];

    // Add the new form data object to the array
    formDataArray.push(formData);

    // Store the updated form data array in local storage
    localStorage.setItem('formData', JSON.stringify(formDataArray));

    // Display a success message or perform any other actions
    alert('Form submitted successfully!');
    
    // Clear the form inputs
    document.getElementById('registrationForm').reset();
});
