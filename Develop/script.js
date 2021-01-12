jQuery(document).ready(function ($) {
    var now = moment();
    console.log(now.format("HH"));
    var currentDay = moment().format("dddd MMMM Do"); //sets current date time format
    var startOfDay = moment().startOf('day');
    console.log(startOfDay);
    var dayEl = $("#currentDay"); //getting element to store current date text in
    $(dayEl).text(currentDay); //sets text in element to current date

    // var hours = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
    var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 21, 22];


    for (var i = 0; i < hours.length; i++) { //for every hour listed in hours...
        var container = $(".container"); // references container
        var block = $("<div>");
        var timeText = $("<p>"); 
        var inputArea = $("<input>");
        var saveButton = $("<button>");
        var icon = $("<i>");
        debugger;
        var hour = startOfDay.add((hours[i]), "hour").set(0, "minutes").set(0, "seconds");
        var hourFormatted = hour.format("hA");
        console.log(hour);
        $(container).append((block).addClass("row time-block")); // add a div to container and apply classes
        $(block).append((timeText).text(hourFormatted).addClass("hour col-2")); // add a p tag to div with set text per hour and classes
        $(block).append((inputArea).addClass("description col-8")); // add form field/text area to div and apply classes
        $(block).append((saveButton).addClass("saveBtn col-2")); // add button to div and apply classes
        $(saveButton).append((icon).addClass("far fa-save")); // add save icon to button
        var nextHour = moment().startOf('day').add((hours[i]), "hour").set(0, "minutes").set(0, "seconds");
        nextHour.add(1, "hour");
        if (now.isBetween(hour, nextHour) == true) {
            $(inputArea).addClass("present"); 
        }
        else if (moment(hour).isAfter(now) == true) {
            $(inputArea).addClass("future");
        }
        else if (moment(now).isAfter(hour) == true) {
            $(inputArea).addClass("past");
        }
        
        hour = startOfDay.subtract((hours[i]), "hour").set(0, "minutes").set(0, "seconds");
    }





});