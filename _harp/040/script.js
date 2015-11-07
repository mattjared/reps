$('button').on('click', function() {
    var x = $('.findClass').val();
    var y = $('.placeClass').val();
    $('.findme').addClass(y);
});
