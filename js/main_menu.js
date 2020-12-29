// Events
$(document).ready(function() {
    // # Buttons
    // New Game
    $('#behir-main-menu-newgame').click(function(){
        behir_newgame();
    });
    // # Other events
    /*$('#behier-newgame-player-amt').moved.zf.slider(function(){
        behir_newgame_update_player_amt();
    });*/
});

function behir_newgame()
{
    $('#behir-main-menu').hide();
    $('#behir-new-game-1').removeClass('hide');
}

function behir_newgame_update_player_amt()
{
    console.log('This should update the amount');
    $('#behir-player-amt-display').html = $('#behir-player-amt').html;
}
