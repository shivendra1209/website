var changeButton = document.querySelectorAll(".changeButton");
var change = document.querySelectorAll(".change");
var choice = [false, false, false, false, false];

for (let i = 0; i < changeButton.length; i++) {

    changeButton[i].addEventListener('click', function() {
        choice[i] = !choice[i];

        if (choice[i]) {
            change[i].style.display = "block";
        } else {
            change[i].style.display = "none";
        }
    }, false);
}