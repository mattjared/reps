$('body').on('click', function() {
    $('button').addClass('yep');
});

$('button').on('click', function(){
    var x = $('input').val();
    var y = x * .05;
    $('h1').text(y);
});

function display(start){
    y = start * .05
    document.querySelector('h1').innerHTML = y;
}
var x = document.querySelector('input');

