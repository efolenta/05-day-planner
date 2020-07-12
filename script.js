$(document).ready(function() {
    let currentDate = new Date();
    let currentHour = currentDate.getHours() + ":" + currentDate.getMinutes();

    console.log("The current hour is: ", currentHour);
    let name = prompt("Please type in your name!");

    alert(`Welcome ${name} to the day planner`)
    alert(`The current time is ${currentHour}`)

    $('#name').html('<h1>Hello Friends!</h1>');

    if (currentHour  <= 20 ) {
    alert("It is before noon!");

    } else if (currentHour >= 12) {
    alert("it is afternoon.");
    }

});