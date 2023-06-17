// Get the form element
var form = document.getElementById('registrationForm');

// Add event listener for form submission
form.addEventListener('submit', function (e) {
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

    // Store the form details in local storage
    var userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
    userDetails.push(formData);
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Display the user details on the screen
    displayUserDetails(userDetails);

    // Clear the form inputs
    document.getElementById('registrationForm').reset();

});

// Function to display user details on the screen
function displayUserDetails(userDetails) {
    var userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear the previous details

    userDetails.forEach(function (user) {
        var details = Object.values(user).filter(value => value); // Filter out empty or undefined values
        var li = document.createElement('li');
        li.textContent = details.join(' - ');

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            // Remove the user detail from local storage
            var storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
            var updatedUserDetails = storedUserDetails.filter(function(item) {
                return item.email !== user.email;
            });
            localStorage.setItem('userDetails', JSON.stringify(updatedUserDetails));

            // Remove the user detail from the UI
            li.remove();
        });

        li.appendChild(deleteButton);
        userList.appendChild(li);
    });

    // Show the user details section
    var userDetailsSection = document.getElementById('userDetails');
    userDetailsSection.style.display = 'block';
}

// Load the user details from local storage on page load
var storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
if (storedUserDetails) {
    displayUserDetails(storedUserDetails);
}
