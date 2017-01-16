$(document).ready(function() {
  $('button').on('click', function() {
    var $color = $(this).data('color');
    makeBlock($color);
    clicks($color);
  })
})
function makeBlock(color) {
  var $colorCube = $('<div class="color-cube ' + color + '"></div>')
  $('.container').append($colorCube);
}


function clicks(color) {
  var $number = $('#' + color).children().text();
  $number = Number($number);
  $number++;
  $('#' + color).children().text($number);
}


//Attempt
//   () {
//     var color = $('button').data("color");
//     var clicks = 0;
//
//     $('.container').append('<div class="color-cube" style="background-color: '+ color +' ">');
//     $('#id'+"color").text('clicks', function(){
//       for (i=0; i>0; i++){
//
//       }
//     });
//
//   })
//
// });

// function colorFinder =
// $(this).data("color")

//Attempt
//
// $(document).ready(function() {
//   $('button').on('click', function() {
//     var color = '$(this).attr("data-color")';
//     var clicks = 0;
//
//     $('.container').append('<div class="color-cube" style="background-color: '+ color +' ">');
//     $('#id'+"color").text('clicks')
//
//   })
//
// });
