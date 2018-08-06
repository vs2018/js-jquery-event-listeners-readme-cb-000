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

    if (event.which == 71) {
      alert('G was pressed');

    }
})


}



$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()

});
