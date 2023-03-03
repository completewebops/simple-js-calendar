<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="Description" content="Enter your description here"/>

<link rel="stylesheet" type="text/css" href="calendar.css">
<title>Simple Js Calendar</title>
</head>
<div id="calendar-container">
<div class="calendar-header">
  <div>
    <button id="prev-year">&lt;&lt;</button>
    <button id="prev-month">&lt;</button>
  </div>
  <h2 id="month-year"></h2>
  <div>
    <button id="next-month">&gt;</button>
    <button id="next-year">&gt;&gt;</button>
    <button id="today-button">Today</button>
  </div>
</div>


      <table id="calendar">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody id="calendar-body"></tbody>
      </table>
    </div>
   
<script src="calendar.js"></script>

</body>
</html>