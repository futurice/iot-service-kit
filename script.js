var flkty = new Flickity('.carousel');

$( "#menubutton" ).click(function() {
  $( "#nav-popover" ).toggleClass( "collapsed" );
  $( "#nav" ).toggleClass( "inactive" );
});

$( "#preview-tab" ).click(function() {
  flkty.select(0);
  $( ".tab" ).removeClass( "active" );
  $( this ).addClass( "active" );
});
$( "#journey-tab" ).click(function() {
  flkty.select(1);
  $( ".tab" ).removeClass( "active" );
  $( this ).addClass( "active" );
});
$( "#data-tab" ).click(function() {
  flkty.select(2);
  $( ".tab" ).removeClass( "active" );
  $( this ).addClass( "active" );
});

flkty.on( 'select', function() {
  $( ".tab" ).removeClass( "active" );
  switch (flkty.selectedIndex) {
    case 0: $( "#preview-tab" ).addClass( "active" );
    break;
    case 1: $( "#journey-tab" ).addClass( "active" );
    break;
    case 2: $( "#data-tab" ).addClass( "active" );
  }
});
