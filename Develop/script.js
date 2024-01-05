// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //variables
  let today = dayjs();
  const hour9 = $("#hour-9");
  const hour10 = $("#hour-10");
  const hour11 = $("#hour-11");
  const hour12 = $("#hour-12");
  const hour13 = $("#hour-13");
  const hour14 = $("#hour-14");
  const hour15 = $("#hour-15");
  const hour16 = $("#hour-16");
  const hour17 = $("#hour-17");
  const displayDate = $("#currentDay");
  const buttons = $(".btn");
  const block = $(".time-block");
  
  //got the local storage to save on the click of elements
  buttons.on("click", save);
  function save() {
    const buttonId = $(this).parent().attr("id");
    const saveText = $(this).siblings(".description").val();
    localStorage.setItem(buttonId, saveText);
  }
  
  //changes the color based on the time 
  if (parseInt(today.format("HH")) < 9) {
    hour9.addClass("future");
    hour10.addClass("future");
    hour11.addClass("future");
    hour12.addClass("future");
    hour13.addClass("future");
    hour14.addClass("future");
    hour15.addClass("future");
    hour16.addClass("future");
    hour17.addClass("future");
  }
  if (today.format("HH") === "09") {
    hour9.addClass("present");
    hour10.addClass("future");
    hour11.addClass("future");
    hour12.addClass("future");
    hour13.addClass("future");
    hour14.addClass("future");
    hour15.addClass("future");
    hour16.addClass("future");
    hour17.addClass("future");
  } else if (today.format("HH") === "10") {
    hour9.addClass("past");
    hour10.addClass("present");
    hour11.addClass("future");
    hour12.addClass("future");
    hour13.addClass("future");
    hour14.addClass("future");
    hour15.addClass("future");
    hour16.addClass("future");
    hour17.addClass("future");
  } else if (today.format("HH") === "11") {
    hour9.addClass("past");
    hour10.addClass("past");
    hour11.addClass("present");
    hour12.addClass("future");
    hour13.addClass("future");
    hour14.addClass("future");
    hour15.addClass("future");
    hour16.addClass("future");
    hour17.addClass("future");
  } else if (today.format("HH") === "12") {
    hour9.addClass("past");
    hour10.addClass("past");
    hour11.addClass("past");
    hour12.addClass("present");
    hour13.addClass("future");
    hour14.addClass("future");
    hour15.addClass("future");
    hour16.addClass("future");
    hour17.addClass("future");
  } else if (today.format("HH") === "13") {
    hour9.addClass("past");
    hour10.addClass("past");
    hour11.addClass("past");
    hour12.addClass("past");
    hour13.addClass("present");
    hour14.addClass("future");
    hour15.addClass("future");
    hour16.addClass("future");
    hour17.addClass("future");
  } else if (today.format("HH") === "14") {
    hour9.addClass("past");
    hour10.addClass("past");
    hour11.addClass("past");
    hour12.addClass("past");
    hour13.addClass("past");
    hour14.addClass("present");
    hour15.addClass("future");
    hour16.addClass("future");
    hour17.addClass("future");
  } else if (today.format("HH") === "15") {
    hour9.addClass("past");
    hour10.addClass("past");
    hour11.addClass("past");
    hour12.addClass("past");
    hour13.addClass("past");
    hour14.addClass("past");
    hour15.addClass("present");
    hour16.addClass("future");
    hour17.addClass("future");
  } else if (today.format("HH") === "16") {
    hour9.addClass("past");
    hour10.addClass("past");
    hour11.addClass("past");
    hour12.addClass("past");
    hour13.addClass("past");
    hour14.addClass("past");
    hour15.addClass("past");
    hour16.addClass("present");
    hour17.addClass("future");
  } else if (today.format("HH") === "17") {
    hour9.addClass("past");
    hour10.addClass("past");
    hour11.addClass("past");
    hour12.addClass("past");
    hour13.addClass("past");
    hour14.addClass("past");
    hour15.addClass("past");
    hour16.addClass("past");
    hour17.addClass("present");
  } else {
    hour9.addClass("past");
    hour10.addClass("past");
    hour11.addClass("past");
    hour12.addClass("past");
    hour13.addClass("past");
    hour14.addClass("past");
    hour15.addClass("past");
    hour16.addClass("past");
    hour17.addClass("past");
  }
  
  //use a for loop to iterate through the time-block class, and update the value using the key found in the localStorage
  for (let i = 0; i < block.length; i++) {
    const blockId = $(block[i]).attr("id");
    const storedText = localStorage.getItem(blockId);
    if (storedText != null) {
      $(`#${blockId}`).children(".description").val(storedText);
    }
  }

  //displays date using day.js
  displayDate.text(today.format("dddd, MMM D, YYYY - h:mm a"));
});
