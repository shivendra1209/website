var personButton = document.getElementsByClassName('choiceButton');
var inPerson = document.getElementById('inPerson');
var booking = document.getElementById('bookingDateTime');
var choiceDiv = document.getElementsByClassName('choice');
var choice = [false, false, false, false];
personButton[0].addEventListener('click', function() {
    for (let i = 1; i < personButton.length; i++) {
        choice[i] = false;
        choiceDiv[i].style.borderBottom = "0px";
    }
    choice[0] = !choice[0];
    if (choice[0]) {
        inPerson.style.display = "block";
        booking.style.display = "block";
        choiceDiv[0].style.borderBottom = "2px solid black";
    } else {
        inPerson.style.display = "none";
        booking.style.display = "none";
        choiceDiv[0].style.borderBottom = "0px";
    }

});
for (let i = 1; i < personButton.length; i++) {
    personButton[i].addEventListener('click', function() {
        for (let j = 0; j < personButton.length; j++) {
            if (j != i) {
                choice[j] = false;
                choiceDiv[j].style.borderBottom = "0px";
            }
        }
        choice[i] = !choice[i];
        if (choice[i]) {
            booking.style.display = "block";
            choiceDiv[i].style.borderBottom = "2px solid black";

        } else {
            choiceDiv[i].style.borderBottom = "0px";
            booking.style.display = "none";
        }
        inPerson.style.display = "none";
    });

}
var confirmButton = document.getElementById('confirmButton');
var confirm = document.getElementById('confirmBookingDialog');
confirmButton.addEventListener('click', function() {
    confirm.style.display = "block";
});