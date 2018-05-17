var headingButton = document.getElementsByClassName("headingButton");
var section = document.getElementsByClassName("detailSection");

for (let i = 0; i < headingButton.length; i++) {
    headingButton[i].addEventListener('click', function() {
        section[i].style.display = "block";
        headingButton[i].classList.add('active');
        for (let j = 0; j < headingButton.length; j++) {
            if (j != i) {
                section[j].style.display = "none";
                headingButton[j].classList.remove('active');
            }
        }

    });
}