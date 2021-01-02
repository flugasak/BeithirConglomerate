// Events
$(document).ready(function() {
  // Initialize
  beithir_init_game();
  // # Buttons
  // New Game
  $('#beithir-main-menu-newgame').click(function(){
    beithir_newgame();
  });
  // Load a game
  $('#beithir-main-menu-oldgame').click(function(){
    beithir_list_games();
  });
  // Debug button
  $('#beithir-main-menu-debug').click(function(){
    beithir_debug();
  });
  // # Other events
  $('#beithir-newgame-player-amt').on('change changed.zf.slider',function(){
    beithir_newgame_update_player_amt();
    //beithir_debug();
  });
});

function beithir_debug()
{
  console.log('debug');
  //let keys = Object.keys($('#beithir-newgame-player-amt'));
  //let keys = Object.keys( $('#beithir-player-amt')[0] );
  //console.log(keys)
  //console.log( $('#beithir-player-amt')[0].value )
  //console.log( $('#beithir-player-amt-display'))
}

function beithir_init_game()
{
  //$('#beithir-main-menu').hide();
  $('#beithir-new-game-1').hide();
  $('#beithir-load-game').hide();
}

function beithir_newgame()
{
  // We've just started, which pages are visible?
  $('#beithir-main-menu').hide();
  $('#beithir-new-game-1').removeClass('hide');
}

function beithir_newgame_update_player_amt()
{
  $('#beithir-player-amt-display')[0].innerText = $('#beithir-player-amt')[0].value;
}

function beithir_list_games()
{
  // # Load list of games

  $('#beithir-main-menu').hide();
  $('#beithir-load-game').show();

  // This will change, so let's make it a variable
  var beithir_server = "https://behir.skirner.net/api/";

  $.get( beithir_server + "/?listgames", function( data ) {
    console.log(data);
  });
}
