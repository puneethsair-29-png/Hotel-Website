// Booking Form Validation

function validateBooking() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    if (email == "") {
        alert("Please enter your email.");
        return false;
    }

    if (phone == "") {
        alert("Please enter your phone number.");
        return false;
    }

    if (checkin == "") {
        alert("Please select check-in date.");
        return false;
    }

    if (checkout == "") {
        alert("Please select check-out date.");
        return false;
    }

    alert("Room booked successfully!");

    return true;
}


// Contact Form Validation

function validateContact() {

    let name = document.getElementById("contactName").value.trim();
    let email = document.getElementById("contactEmail").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    if (email == "") {
        alert("Please enter your email.");
        return false;
    }

    if (message == "") {
        alert("Please enter your message.");
        return false;
    }

    alert("Message sent successfully!");

    return true;
}