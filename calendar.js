// Get the current date
var currentDate = new Date();

// Set the initial month and year
var currentMonth = currentDate.getMonth();
var currentYear = currentDate.getFullYear();

// Get the first day of the current month
var firstDay = new Date(currentYear, currentMonth, 1).getDay();

// Get the number of days in the current month
var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

// Set the text of the month and year header
document.getElementById("month-year").innerHTML = new Date(currentYear, currentMonth).toLocaleDateString("en-US", { month: "long", year: "numeric" });

// Get the calendar body element
var calendarBody = document.getElementById("calendar-body");

// Clear the previous contents of the calendar body
calendarBody.innerHTML = "";

// Create the calendar rows and cells
var date = 1;
for (var i = 0; i < 6; i++) {
  // Create a new row
  var row = document.createElement("tr");

  // Create cells for each day of the week
  for (var j = 0; j < 7; j++) {
    var cell = document.createElement("td");

    // Add the date to the cell if it's within the current month
    if (i == 0 && j < firstDay) {
      // Add an empty cell for days before the first of the month
      var text = document.createTextNode("");
      cell.appendChild(text);
    } else if (date > daysInMonth) {
      // Add an empty cell for days after the end of the month
      var text = document.createTextNode("");
      cell.appendChild(text);
    } else {
      // Add the date to the cell
      var text = document.createTextNode(date);
      cell.appendChild(text);

      // Highlight today's date
      if (currentDate.getDate() == date && currentDate.getMonth() == currentMonth && currentDate.getFullYear() == currentYear) {
        cell.className = "today";
      }

      // Increment the date counter
      date++;
    }

    // Add the cell to the row
    row.appendChild(cell);
  }

  // Add the row to the calendar body
  calendarBody.appendChild(row);
}

// Add event listeners to the navigation buttons
var prevMonthButton = document.getElementById("prev-month");
var nextMonthButton = document.getElementById("next-month");
var prevYearButton = document.getElementById("prev-year");
var nextYearButton = document.getElementById("next-year");
prevMonthButton.addEventListener("click", function() {
  // Decrement the month
  currentMonth--;

  // If the month is less than 0, set it to 11 (December of the previous year)
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }

  // Update the calendar
  updateCalendar();
});

nextMonthButton.addEventListener("click", function() {
  // Increment the month
  currentMonth++;

  // If the month is greater than 11, set it to 0 (January of the next year)
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }

  // Update the calendar
  updateCalendar();
});

prevYearButton.addEventListener("click", function() {
  // Decrement the year
  currentYear--;

  // Update the calendar
  updateCalendar();
});

nextYearButton.addEventListener("click", function() {
  // Increment the year
  currentYear++;

  // Update the calendar
  updateCalendar();
});


// Function to update the calendar
function updateCalendar() {
  // Get the first day of the current month
  var firstDay = new Date(currentYear, currentMonth, 1).getDay();

  // Get the number of days in the current month
  var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Set the text of the month and year header
  document.getElementById("month-year").innerHTML = new Date(currentYear, currentMonth).toLocaleDateString("en-US", { month: "long", year: "numeric" });

  // Get the calendar body element
  var calendarBody = document.getElementById("calendar-body");

  // Clear the previous contents of the calendar body
  calendarBody.innerHTML = "";

  // Create the calendar rows and cells
  var date = 1;
  for (var i = 0; i < 6; i++) {
    // Create a new row
    var row = document.createElement("tr");

    // Create cells for each day of the week
    for (var j = 0; j < 7; j++) {
      var cell = document.createElement("td");

      // Add the date to the cell if it's within the current month
      if (i == 0 && j < firstDay) {
        // Add an empty cell for days before the first of the month
        var text = document.createTextNode("");
        cell.appendChild(text);
      } else if (date > daysInMonth) {
        // Add an empty cell for days after the end of the month
        var text = document.createTextNode("");
        cell.appendChild(text);
      } else {
        // Add the date to the cell
        var text = document.createTextNode(date);
        cell.appendChild(text);

        // Highlight today's date
        if (currentDate.getDate() == date && currentDate.getMonth() == currentMonth && currentDate.getFullYear() == currentYear) {
          cell.className = "today";
        }

        // Increment the date counter
        date++;
      }

      // Add the cell to the row
      row.appendChild(cell);
    }

    // Add the row to the calendar body
    calendarBody.appendChild(row);
  }
}
// Get the "Today" button element
var todayButton = document.getElementById("today-button");

// Add an event listener to the "Today" button
todayButton.addEventListener("click", function () {
  // Get the current date
  currentDate = new Date();

  // Set the current month and year
  currentMonth = currentDate.getMonth();
  currentYear = currentDate.getFullYear();

  // Update the calendar
  updateCalendar();
});

todayButton.addEventListener("click", function () {
  // Get the current date
  currentDate = new Date();

  // Set the current month and year
  currentMonth = currentDate.getMonth();
  currentYear = currentDate.getFullYear();

  // Update the calendar
  updateCalendar();
});
// Get the calendar body element
var calendarBody = document.getElementById("calendar-body");

// Clear the previous contents of the calendar body
calendarBody.innerHTML = "";

// Create the calendar rows and cells
var date = 1;
for (var i = 0; i < 6; i++) {
  // Create a new row
  var row = document.createElement("tr");

  // Create cells for each day of the week
  for (var j = 0; j < 7; j++) {
    var cell = document.createElement("td");

    // Add the date to the cell if it's within the current month
    if (i == 0 && j < firstDay) {
      // Add an empty cell for days before the first of the month
      var text = document.createTextNode("");
      cell.appendChild(text);
    } else if (date > daysInMonth) {
      // Add an empty cell for days after the end of the month
      var text = document.createTextNode("");
      cell.appendChild(text);
    } else {
      // Add the date to the cell
      var text = document.createTextNode(date);
      cell.appendChild(text);

      // Highlight today's date
      if (currentDate.getDate() == date && currentDate.getMonth() == currentMonth && currentDate.getFullYear() == currentYear) {
        cell.className = "today";
      }

      // Increment the date counter
      date++;
    }

    // Add the cell to the row
    row.appendChild(cell);
  }

  // Add the row to the calendar body
  calendarBody.appendChild(row);
}

// Check if the last row of the calendar contains any dates
var lastRow = calendarBody.lastElementChild;
var lastRowIsEmpty = true;
for (var j = 0; j < 7; j++) {
  if (lastRow.children[j].innerHTML != "") {
    lastRowIsEmpty = false;
    break;
  }
}

// Hide the last row if it contains no dates
if (lastRowIsEmpty) {
  lastRow.style.display = "none";
} else {
  lastRow.style.display = "";
}
