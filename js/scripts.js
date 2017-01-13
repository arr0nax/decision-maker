$(document).ready(function() {
  var total = []
  var r1 = Math.floor((Math.random() * 4) + 1);
  var r2 = Math.floor((Math.random() * 4) + 1);
  var r3 = 5;
  var r4 = 10000;
  var r5 = Math.floor((Math.random() * 4) + 1);
  var r = [r1,r2,r3,r4,r5];
  var counter = 0;
  var choicetracker = 0;

  $("form#decide").submit(function() {
    event.preventDefault();
    var q1 = $("input:radio[name=q1]:checked").val();
    var q2 = $("input:radio[name=q2]:checked").val();
    var q3 = $("#q3").val();
    q3 = q3.length;
    var q4 = parseInt($("#q4").val());
    var q5 = $("input:radio[name=q5]:checked").val();
    $("#result").text("click the jockey to generate your choice");
    total = [q1,q2,q3,q4,q5]
    $('#decide').hide();
    $('#result').show();
    $('#jockey img').show();
    return total

  });
  $('#jockey').click(function() {

    if (counter <= 4) {
    choose(counter);
    counter = counter + 1;
    var margin = choicetracker*100
    var margin = margin.toString();
    var margin = margin + "px"
    $('.jockey img').css({"margin-left": margin})

    } else if (counter > 4) {
      $('#result').hide();
      $('#jockey').hide();
      $('#finalchoice').text("your randomly generated choice is:"+choicetracker);
      $('#finalchoice').show();
    }


  });
  var choose = function(x) {
    if (total[x] > r[x]) {
      choicetracker = choicetracker+1;
      return choicetracker
    } else if (total[x] < r[x]) {
      choicetracker = choicetracker-1;
      return choicetracker
    } else {
      choicetracker = choicetracker;
      return choicetracker;
    }

  }

});
