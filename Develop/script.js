jQuery(document).ready(function ($) {

    var now = moment(); //sets moment to now
    var userTask = {}; // empty array to update later
    var currentDay = moment().format("dddd MMMM Do"); //sets current date time format
    var startOfDay = moment().startOf('day'); // set to start of today (00:00)
    var dayEl = $("#currentDay"); //getting element to store current date text in
    $(dayEl).text(currentDay); //sets text in element to current date

    var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]; //hours we want to target
    var keys = ["hour 9", "hour 10", "hour 11", "hour 12", "hour 13", "hour 14", "hour 15", "hour 16", "hour 17"];

    for (var i = 0; i < hours.length; i++) { //for every hour listed in hours...
        // variables we'll need later
        var container = $(".container");
        var block = $("<div>");
        var timeText = $("<p>");
        var inputArea = $("<input type='text'>");
        var saveButton = $("<button>");
        var icon = $("<i>");
        var hour = startOfDay.add((hours[i]), "hour").set(0, "minutes").set(0, "seconds");
        var hourFormatted = hour.format("hA");

        $(container).append((block).addClass("row time-block")); // add a div to container and apply classes
        $(block).append((timeText).text(hourFormatted).addClass("hour col-2")); // add a p tag to div with set text per hour and classes
        $(block).append((inputArea).addClass("description col-8")); // add form field/text area to div and apply classes
        $(block).append((saveButton).addClass("saveBtn col-2")); // add button to div and apply classes
        $(saveButton).append((icon).addClass("far fa-save")); // add save icon to button
        var nextHour = moment().startOf('day').add((hours[i]), "hour").set(0, "minutes").set(0, "seconds"); // sets to this hour on the dot
        $(inputArea).attr('id', hours[i]); // sets id for each field to reference later
        nextHour.add(1, "hour"); // adds an hour to next hour to jump an hour ahead

        if (now.isBetween(hour, nextHour) == true) { // sets the colour based on a class if it's within the current hour
            $(inputArea).addClass("present");
        }
        else if (moment(hour).isAfter(now) == true) { // sets the colour based on a class if it's in the future
            $(inputArea).addClass("future");
        }
        else if (moment(now).isAfter(hour) == true) { // sets the colour based on a class if it's in the past
            $(inputArea).addClass("past");
        }

        hour = startOfDay.subtract((hours[i]), "hour").set(0, "minutes").set(0, "seconds"); // resets hour
    }

    renderEvents(); // loads any previous events if the user has anything stored in localstorage from last session

    $(".saveBtn").click(function (event) { // on click of the save buttons...
        event.preventDefault(); // prevent default

        var userInput = $(this).siblings(".description").val(); // get the input from the field
        var saveIndex = $(this).siblings(".description").attr("id"); // get the id from the field

        userTask = { // for local storage, set this information
            userText: userInput, 
            time: saveIndex,
        }

        var userTaskString = JSON.stringify(userTask); // turns object into string
        JSON.parse(userTaskString); // parse for storage
        localStorage.setItem(("hour" + " " + saveIndex), userTaskString); // sets the item in localstorage for later use
    })

    function renderEvents() {
        for (var i = 0; i < hours.length; i++) { // for all hours of the planner...
            if (localStorage.getItem((keys[i])) === null) {  // if there's nothing stored in the field that matches the saveIndex in localstorage, do nothing

            }
            else if (localStorage.getItem((keys[i])) !== null) { // if there's a saveIndex in local storage that matches the id...
                var lastUser = JSON.parse(localStorage.getItem(keys[i])); // get the item for use
                var dynamicID = hours[i]; // reference item for use
                $("#" + dynamicID).val(lastUser.userText); // find relevant field and populate with info from localstorage
            }
        }
    }


});