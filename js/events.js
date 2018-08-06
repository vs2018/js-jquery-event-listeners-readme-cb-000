//define functions here

function getIt () {
  $('p').on('click', function(event) {
    alert('Hey!')
  })
}


function frameIt () {
  $('img').on('load', function(event) {
    $( "img" ).addClass( "myClass yourClass" );
  })
}



$(document).ready(function(){

// call functions here
getIt()

});
