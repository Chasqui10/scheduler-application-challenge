var timeDisplayEl = $('#currentDay');
var timeBlockEl = $('.time-block');

 // Display Time
function displayTime(){
  var rightNow = dayjs().format('MMM DD, YYYY [at] h:mm:ss a');
  timeDisplayEl.text(rightNow);
};
// Function to pull the current time from Dayjs() 
displayTime();

// Utilizng the ".saveBtn" class to create a function that activates when clicked to save the text in local storage
$('.saveBtn').on('click', function(){
   var textDescription = $(this).siblings('textarea').val();
   //console.log(textDescription);
   var timeKey = $(this).parent().attr('id');
   //console.log(timeKey);
   localStorage.setItem(timeKey,textDescription);
});

// Background function that adds and removes the class name attribute to each section based off the current hour of the day it is. 
function schedulerTimeCheck() {
  var currentHour = dayjs().hour();
  // console.log(currentHour);
  timeBlockEl.each(function() {
    var hourID = parseInt($(this).attr('id').split("-")[1]);
    // console.log(hourID);
    if (hourID < currentHour){
      $(this).addClass('past');
      $(this).removeClass('present');
      $(this).removeClass('future');
      
    }else if (hourID === currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
};

schedulerTimeCheck();

// This ensures to get the data from local storage that is stored from .saveBtn 'click; function above. 
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

// Clearing the daily schedule information 
$('.clearBtn').on('click',function(){
  localStorage.clear();
});