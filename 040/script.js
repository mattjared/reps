$('button').on('click', function() {
    var x = $('.findClass').val();
    var y = $('.placeClass').val();
    $('.' + x).addClass(y);
});

// var b = document.getElementById('button')

// document.getElementById('button').onclick = function () {
//     console.log(b);
// }

