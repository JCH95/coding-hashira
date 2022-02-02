var saveBtn = document.getElementById("save");

// Current Date/Time
var today = new Date();
document.getElementById("currentDay").innerHTML = today;

// Current hour of the day
var textSlots = document.getElementsByClassName("textarea");
// Changes time in current moment into just HOUR
var time = parseInt(moment().format("H"));
console.log(time);

// If/Then statements for coloring time slots
Array.from(textSlots).forEach(textarea => {
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

saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    textStorage.push(textarea.value);
    localStorage.setItem("textarea", JSON.stringify(textStorage));
    listBuilder(textarea.value);
    textarea.value="";
});

var getText = JSON.parse(localStorage.getItem("textarea"));
getText.forEach(textarea => {
    listBuilder(textarea);
});