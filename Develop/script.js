var saveBtn = document.getElementById("save");

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

// Storing text in local storage
var textStorage = localStorage.getItem("textarea")
    ? JSON.parse(localStorage.getItem("textarea"))
    : [];
    textStorage.forEach(textarea => {
        listBuilder(textarea);
    });

// Save button functionality
saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    textStorage.push(textarea.value);
    localStorage.setItem("textarea", JSON.stringify(textStorage));
    listBuilder(textarea.value);
    textarea.value="";
});

var listBuilder = (text) => {
    var notes = document.createElement("p");
    notes.innerHTML = text
    textarea.appendChild(notes);
};

// var getText = JSON.parse(localStorage.getItem("textarea"));
// textStorage.forEach(textarea => {
//     listBuilder(textarea);
// });