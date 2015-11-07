$('body').on('click', function() {
    $('button').addClass('yep');
});

$('button').on('click', function(){
    var payment = $('#proof-value').val();
    if ($('#proof-rate').prop('checked')) {
        var savings = (payment * .15) * 12;
    }
    else {
        var savings = payment * .15;
    }
    $('h1').text(Math.round(savings * 100) / 100);
});