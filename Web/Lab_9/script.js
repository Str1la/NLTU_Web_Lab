function getFormData() {
    // Отримання значень з ім'я, email та місто
    var name = document.querySelector('.text1').value;
    var email = document.querySelector('.text2').value;
    var city = document.querySelector('.text3').value;

    console.log("Ім'я:", name);
    console.log("E-mail:", email);
    console.log("Місто:", city);

    // Отримання значень днів тижня та часу
    var dayCheckboxes = document.querySelectorAll('.day-checkbox');
    var startTimes = document.querySelectorAll('.start-time');
    var endTimes = document.querySelectorAll('.end-time');

    dayCheckboxes.forEach(function (checkbox, index) {
        if (checkbox.checked) {
            var dayName = checkbox.parentNode.querySelector('label').innerText;
            var startTime = startTimes[index].value;
            var endTime = endTimes[index].value;

            console.log(dayName + " З " + startTime + " до " + endTime);
        }
    });
}