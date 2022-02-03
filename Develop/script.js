var buttons = [
    document.getElementById("save9"),
    document.getElementById("save10"),
    document.getElementById("save11"),
    document.getElementById("save12"),
    document.getElementById("save13"),
    document.getElementById("save14"),
    document.getElementById("save15"),
    document.getElementById("save16"),
    document.getElementById("save17"),
]

// Current Date/Time
var today = new Date();
document.getElementById("currentDay").innerHTML = today;

// Current hour of the day
var textarea = document.getElementsByClassName("textarea");
// Changes time in current moment into just HOUR
var time = parseInt(moment().format("H"));
console.log(time);

// If/Then statements for coloring time slots
Array.from(textarea).forEach(textarea => {
    var slotIdString = textarea.id, textareaHour;
    if (slotIdString) {
        textareaHour = parseInt(slotIdString);
    }

    // Compare row hour to current time and change color
    if (textareaHour) {
        // Present time
        if (time === textareaHour) {
            setColor(textarea, "red");
        }
        // Future time
        else if (time < textareaHour) {
            setColor(textarea, "green");
        }
        // Past time
        else if (time > textareaHour) {
            setColor(textarea, "lightgrey");
        }
        else {
            setColor(textarea, "white");
        }
    }
});

// Sets the background color of text area
function setColor(textarea, color) {
    textarea.style.backgroundColor = color;
};

// Grab save button from html
var saveBtn = document.getElementById("save");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        var currentId = this.getAttribute("id").split("save")[1]
        var note = document.getElementById(currentId).value;
        localStorage.setItem("textarea" + currentId, JSON.stringify(note));
        alert("Note was saved!");

        // Load the saved notes into the correct time slot
        var savedNote = localStorage.getItem("textarea" + currentId);
        localStorage.getItem("textarea" + currentId);
        savedNote = JSON.parse(savedNote);
        // console.log(currentId);
        // var textStr = currentId.toString();
        // var textArea = document.getElementById(textStr);
        // textArea.textContent = savedNote;
    
    });
});

// Section for pulling the text content from local storage.
var hour9 = document.getElementById("9");
localStorage.getItem("textarea9");
var savedHour = JSON.parse(localStorage.getItem("textarea9"));
hour9.textContent = savedHour;

var hour10 = document.getElementById("10");
localStorage.getItem("textarea10");
var savedHour = JSON.parse(localStorage.getItem("textarea10"));
hour10.textContent = savedHour;

var hour11 = document.getElementById("11");
localStorage.getItem("textarea11");
var savedHour = JSON.parse(localStorage.getItem("textarea11"));
hour11.textContent = savedHour;

var hour12 = document.getElementById("12");
localStorage.getItem("textarea12");
var savedHour = JSON.parse(localStorage.getItem("textarea12"));
hour12.textContent = savedHour;

var hour13 = document.getElementById("13");
localStorage.getItem("textarea13");
var savedHour = JSON.parse(localStorage.getItem("textarea13"));
hour13.textContent = savedHour;

var hour14 = document.getElementById("14");
localStorage.getItem("textarea14");
var savedHour = JSON.parse(localStorage.getItem("textarea14"));
hour14.textContent = savedHour;

var hour15 = document.getElementById("15");
localStorage.getItem("textarea15");
var savedHour = JSON.parse(localStorage.getItem("textarea15"));
hour15.textContent = savedHour;

var hour16 = document.getElementById("16");
localStorage.getItem("textarea16");
var savedHour = JSON.parse(localStorage.getItem("textarea16"));
hour16.textContent = savedHour;

var hour17 = document.getElementById("17");
localStorage.getItem("textarea17");
var savedHour = JSON.parse(localStorage.getItem("textarea17"));
hour17.textContent = savedHour;