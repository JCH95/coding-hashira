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
        alert("note was saved!");

        // Load the saved notes into the correct time slot
        var savedNote = localStorage.getItem("textarea" + currentId);
        savedNote = JSON.parse(savedNote);
        console.log(savedNote);
    });
});