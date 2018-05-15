var personButton = document.getElementsByClassName('choiceButton');
var inPerson = document.getElementById('inPerson');
var booking = document.getElementById('bookingDateTime');
personButton[0].addEventListener('click', function() {
    inPerson.style.display = "block";
    booking.style.display = "block";
});
for (var i = 1; i < personButton.length; i++) {
    personButton[i].addEventListener('click', function() {
        booking.style.display = "block";
        inPerson.style.display = "none";
    });
}
var confirmButton = document.getElementById('confirmButton');
var confirm = document.getElementById('confirmBookingDialog');
confirmButton.addEventListener('click', function() {
    confirm.style.display = "block";
});