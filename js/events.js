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


    
  })
}



$(document).ready(function(){

// call functions here
getIt()
frameIt()

});
