var saveBtn = document.getElementById("save");

// Current Date/Time
var today = new Date();
document.getElementById("currentDay").innerHTML = today;

// Current hour of the day
var timeSlots = document.getElementsByClassName("textarea");
var time = parseInt(moment().format("H"));
console.log(time);

// If/Then statements for coloring time slots
Array.from(timeSlots).forEach(textarea => {
    var slotIdString = textarea.id, textareaHour;
    if (slotIdString) {
        textareaHour = parseInt(slotIdString);
    }

    // Compare row hour to current time and change color
    if (textareaHour) {
        if (time === textareaHour) {
            setColor(textarea, "red");
        }
        else if (time < textareaHour) {
            setColor(textarea, "green");
        }
        else if (time > textareaHour) {
            setColor(textarea, "lightgrey");
        }
        else {
            setColor(textarea, "white");
        }
    }
});

function setColor(textarea, color) {
    textarea.style.backgroundColor = color;
};

function saveButton() {
    
}

saveBtn.onclick = saveButton;