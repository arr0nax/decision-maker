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
  var choices = ['ruby/rails','java/android','php/drupal','c#/.net','css/design']

  $("form#decide").submit(function() {
    event.preventDefault();
    var q1 = $("input:radio[name=q1]:checked").val();
    var q2 = $("input:radio[name=q2]:checked").val();
    var q3 = $("#q3").val();
    q3 = q3.length;
    var q4 = parseInt($("#q4").val());
    var q5 = $("input:radio[name=q5]:checked").val();
    total = [q1,q2,q3,q4,q5]
    $('#decide').fadeOut();
    $('#result').fadeIn();
    $('#jockey img').fadeIn();
    return total

  });

  $('#jockey').click(function() {

    if (counter <= 4) {
    choose(counter);
    counter = counter + 1;
    var margin = Math.abs(choicetracker*2)
    var margin = margin.toString();
    var margin = margin + "vh"
    $('.jockey img').css({"margin-left": margin})

    } else if (counter > 4) {
      $('#result').fadeOut();
      $('#jockey').fadeOut();
      choicetracker = Math.abs(choicetracker)
      $('#finalchoice').text("Congratulations "+$("#q3").val()+"! Your randomly generated choice is: "+choices[choicetracker]);
      $('#finalchoice').fadeIn();
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
