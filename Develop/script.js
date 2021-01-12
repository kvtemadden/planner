jQuery(document).ready(function ($) {
    var currentTime;
    var currentDay = moment().format("dddd MMMM Do"); //sets current date time format
    const startOfDay = moment().startOf('day');
    console.log(startOfDay);
    var dayEl = $("#currentDay"); //getting element to store current date text in
    $(dayEl).text(currentDay); //sets text in element to current date

    // var hours = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
    var hours = [9, 10, 11];


    for (var i = 0; i < hours.length; i++) { //for every hour listed in hours...
        var container = $(".container"); // references container
        var block = $("<div>");
        var timeText = $("<p>"); 
        var inputArea = $("<input>");
        var saveButton = $("<button>");
        var icon = $("<i>");
        debugger;
        var hour = moment().set("hour", hours[i]).set("minute", 0).set("seconds", 0).format("hA");
        console.log(hour);
        $(container).append((block).addClass("row time-block")); // add a div to container and apply classes
        $(block).append((timeText).text(hour).addClass("hour col-2")); // add a p tag to div with set text per hour and classes
        $(block).append((inputArea).addClass("description col-8")); // add form field/text area to div and apply classes
        $(block).append((saveButton).addClass("saveBtn col-2")); // add button to div and apply classes
        $(saveButton).append((icon).addClass("far fa-save")); // add save icon to button
        
    }





});