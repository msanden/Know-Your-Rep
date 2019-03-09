
function resetField(){
  $("input#input-post").val("");
}

function signUp() {
  confirm("Join the conversation. By having an account, you" +
     " can subscribe, vote, and comment on all your" +
     " favorite content. Sign up in just seconds.");
}

$(document).ready(function(){
  $('form#post-items').submit(function(event){
      event.preventDefault();
      var inputPost = $('input#input-post').val();

      $('#posts').append(" <div class='add-post'>" +
                          "<div class='panel panel-default'>" +
                          "<div class='panel-heading'>🐕 smokkie the dog</div>" +
                            "<div class='panel-body'>" +
                              "<span class='plain-text'>" + '>> ' + inputPost +"</span>" +
                              "</div>" +
                              "<div class='panel-footer'>💻 <a href='#'>Comments</a>" +
                              "🗄 <a href='#'>Save</a>💛 <a href='#'>Share</a> " +
                              " 🧽<input type='button' class='btn btn-default' id='delete-post' value='delete'> </div>" +
                            "</div>" +
                            "</div>"
                            );
      resetField();

  });

  $('body').on('click','#delete-post', function(){
      $(this).parent('.add-post').remove();
    });

    $('.clickable1').click(function() {
    $('#governor-hidden').toggle();
    $('#governor-showing').toggle();
  });

  $('.clickable2').click(function() {
  $('#depGov-hidden').toggle();
  $('#depGov-showing').toggle();
});

$('.clickable3').click(function() {
$('#senator-hidden').toggle();
$('#senator-showing').toggle();
});

$('.clickable4').click(function() {
$('#mp1-hidden').toggle();
$('#mp1-showing').toggle();
});

$('.clickable5').click(function() {
$('#mp2-hidden').toggle();
$('#mp2-showing').toggle();
});

$('.clickable6').click(function() {
$('#womanRep-hidden').toggle();
$('#womanRep-showing').toggle();
});

$('.clickable7').click(function() {
$('#mca1-hidden').toggle();
$('#mca1-showing').toggle();
});
$('.clickable8').click(function() {
$('#mca2-hidden').toggle();
$('#mca2-showing').toggle();
});
$('.clickable9').click(function() {
$('#mca3-hidden').toggle();
$('#mca3-showing').toggle();
});
$('.clickable10').click(function() {
$('#mca4-hidden').toggle();
$('#mca4-showing').toggle();
});
$('.clickable11').click(function() {
$('#mca5-hidden').toggle();
$('#mca5-showing').toggle();
});
$('.clickable12').click(function() {
$('#mca6-hidden').toggle();
$('#mca6-showing').toggle();
});

});




var yesVote = 1;
var noVote = 1;
var voteTotal = yesVote + noVote;

function voteStatus(){
  var percentYes = (yesVote / voteTotal) * 100;
  var percentNo = (noVote / voteTotal) * 100;

  var pollHeight = percentYes + "% " + percentNo + "%";

  document.getElementById("first-poll").style.gridTemplateColumns =  pollHeight;
  $('#num-yes').text(Math.round(percentYes) + '%');
  $('#num-no').text(Math.round(percentNo) + '%');

  $('#total-vote').text("All Votes: " + voteTotal);
  $('#total-yes').text( "Vote Yes " +yesVote);
  $('#total-no').text("Vote No " + noVote);
}

function preset(){
  yesVote = 1;
  noVote = 1;
  voteTotal = yesVote + noVote;
  voteStatus();
}

window.onload = preset();

function addleft(){
  yesVote += 1;
  voteTotal += 1;
  voteStatus();
}

function addright(){
  noVote += 1;
  voteTotal += 1;
  voteStatus();
}

function voteStatus2(){
  var percentYes = (yesVote / voteTotal) * 100;
  var percentNo = (noVote / voteTotal) * 100;

  var pollHeight = percentYes + "% " + percentNo + "%";

  document.getElementById("second-poll").style.gridTemplateColumns =  pollHeight;
  $('#num-yes-2').text(Math.round(percentYes) + '%');
  $('#num-no-2').text(Math.round(percentNo) + '%');

  $('#total-vote-2').text("All Votes: " + voteTotal);
  $('#total-yes-2').text( "Vote Yes " + yesVote);
  $('#total-no-2').text("Vote No " + noVote);
}

function preset2(){
  yesVote = 1;
  noVote = 1;
  voteTotal = yesVote + noVote;
  voteStatus2();
}

window.onload = preset2();

function addleft2(){
  yesVote += 1;
  voteTotal += 1;
  voteStatus2();
}

function addright2(){
  noVote += 1;
  voteTotal += 1;
  voteStatus2();
}
