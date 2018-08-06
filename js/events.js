//define functions here

function getIt () {
  $('p').on('click', function(event) {
    alert('Hey!')
  })
}


function frameIt () {
  $('img').on('load', function(event) {
    $(this).addClass( "tasty" );
  })
}

function pressIt () {
  $('form').on('keydown', function(event) {

    if (eent.which == 83) {



    if ($( "input:first" ).val() === "correct") {
   alert('your form is going to be submitted now');
  })
}



$(document).ready(function(){

// call functions here
getIt()
frameIt()

});
