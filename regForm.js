document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var callDate = document.getElementById('callDate').value;
    var callTime = document.getElementById('callTime').value;

    // Store the form data in local storage or perform any desired action
    // Example: Storing the data as an object
    var formData = {
        name: name,
        email: email,
        phone: phone,
        callDate: callDate,
        callTime: callTime
    };

    // Store the form data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Display a success message or redirect to another page
    alert('Form submitted successfully!');

    // Reset the form
    document.getElementById('registrationForm').reset();
});
