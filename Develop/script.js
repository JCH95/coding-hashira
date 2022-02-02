var buttons = [
    document.getElementById("save1"),
    document.getElementById("save2"),
    document.getElementById("save3"),
    document.getElementById("save4"),
    document.getElementById("save5"),
    document.getElementById("save6"),
    document.getElementById("save7"),
    document.getElementById("save8"),
    document.getElementById("save9"),
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

// Event listener for each respective button
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var note = document.getElementsByClassName("textarea").value;
        localStorage.setItem("textarea", JSON.stringify(note));
        alert("Note was saved!");
    }, false);
};

// Load the saved notes into the correct time slot
var loadNotes = function() {
    var savedNotes = localStorage.getItem("textarea").value;

    // If no notes, set notes to empty array and leave function
    if(!savedNotes) {
        return false;
    }
};

loadNotes();
