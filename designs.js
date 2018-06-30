// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


// code for the functionalty if the PIXEL ART MAKER
// document ready function
$(document).ready(function () {
    //set listener to the form submit event
    $('#sizePicker').submit(function (event) {
      event.preventDefault();
      //Sets the values of the grid sizes
      var gWidth = $('#inputWeight').val();
      var gHeight = $('#inputHeight').val();
      
  
      //using the grid sizes as an arguement for the make grid function
      makeGrid(gHeight, gWidth);
      applyColor();
    });
  });
  
  // using vales of grid sizes this create a grid
    function makeGrid(height, width) {
    $('tr').remove();
    for (var row = 1; row <= height; row++) {
      $('#pixelCanvas').append('<tr></tr>');
      for (var col = 1; col <= width; col++) {
        $('tr').filter(':last').append('<td></td>');
      }
    }
  };
  
  //add color to the pickde cell
  var applyColor = function applyColor() {
    var cells = $('td');
    cells.click(function () {
  
      //extract the current value of the color picker
      var color = $('#colorPicker').val();
  
      //check for style attribute and remove or add it.
      if ($(this).attr('style')) {
        $(this).removeAttr('style');
      } else {
        $(this).attr('style', 'background-color:' + color);
      }
    });
  };