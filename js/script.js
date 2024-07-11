// Index - Partners Gallery
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.image-container');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function slides(n) {
    let slides = document.querySelectorAll('.image-container');
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

function activeSlides(n) {
    let slides = document.querySelectorAll('.image-container');
    slideIndex = n;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

// Booking Validation 
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var checkin = document.getElementById('checkin').value;
    var checkout = document.getElementById('checkout').value;
    var bookingType = document.getElementById('bookingType').value;
    var roomType = document.getElementById('roomType').value;
    var packageType = document.getElementById('packageType').value;
    var errors = [];

    if (!name) errors.push('Name is required.');
    if (!email) errors.push('Email is required.');
    if (!phone) errors.push('Phone is required.');
    if (!checkin) errors.push('Check-in date is required.');
    if (!checkout) errors.push('Check-out date is required.');
    
    if (bookingType === 'hotel' && !roomType) errors.push('Room type is required for hotel bookings.');
    if (bookingType === 'resort' && !packageType) errors.push('Package type is required for resort bookings.');

    var errorsDiv = document.getElementById('form-errors');
    errorsDiv.innerHTML = '';

    if (errors.length > 0) {
        errors.forEach(function(error) {
            var errorP = document.createElement('p');
            errorP.textContent = error;
            errorsDiv.appendChild(errorP);
        });
        return false;
    }

    return true;
}

// Contact Form

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    if (fname === '' || lname === '' || email === '' || phone === '' || message === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Form submitted successfully!');
    }
});

// showmore
function toggleText() {
    const content = document.getElementById('about-content');
    const button = document.getElementById('toggle-button');
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        button.textContent = 'Show More';
    } else {
        content.classList.add('expanded');
        button.textContent = 'Show Less';
    }
}

