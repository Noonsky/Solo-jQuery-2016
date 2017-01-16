$(document).ready(function() {
  $('button').on('click', function() {
    var $color = $(this).data('color');
    makeBlock($color);
    clicks($color);
  })
})

function makeBlock(color) {
  var $colorBlock = $('<div class="color-block ' + color + '"></div>')
  $('.container').append($colorBlock);
}


function clicks(color) {
  var $number = $('#' + color).children().text();
  $number = Number($number);
  $number++;
  $('#' + color).children().text($number);
}




//Attempt
// var color;
// var clicks;
//
// $(document).ready(function() {
//     $('.color-button').on('click', makeBlock);
// });
//
//
//
// function makeBlock() {
//     color = $('.color-button').attr("data-color");
//     clicks = $('#' + color).text();
//     clicks = Number(clicks);
//     clicks++;
//     $('#' + color).text(clicks);
//     $('.container').append('<div class="color-cube" '+color+' "></div>');
// }



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
