$(document).ready(function() {
  var total = []
  var choices = [' ruby/rails',' java/android',' php/drupal',' c#/.net',' css/design']
  var choicetallies = [0,0,0,0,0]


  $("form#decide").submit(function() {
    event.preventDefault();
    var q1 = parseInt($("input:radio[name=q1]:checked").val());
      if (q1 === 1) {
        choicetallies[0] = choicetallies[0]+1;
        choicetallies[4] = choicetallies[4]+1;
      }
      else {
        choicetallies[1] = choicetallies[1]+1;
        choicetallies[2] = choicetallies[2]+1;
        choicetallies[3] = choicetallies[3]+1;
      };
      console.log(choicetallies);
    var q2 = parseInt($("input:radio[name=q2]:checked").val());
      if (q2 === 2) {
        choicetallies[0] = choicetallies[0]+1;
        choicetallies[1] = choicetallies[1]+1;
      }
      else {
        choicetallies[4] = choicetallies[4]+1;
        choicetallies[2] = choicetallies[2]+1;
        choicetallies[3] = choicetallies[3]+1;
      };
      console.log(choicetallies);
    var q3 = parseInt($("input:radio[name=q3]:checked").val());
      if (q3 === 2) {
        choicetallies[0] = choicetallies[0]+1;
        choicetallies[1] = choicetallies[1]+1;
      }
      else {
        choicetallies[4] = choicetallies[4]+1;
        choicetallies[2] = choicetallies[2]+1;
        choicetallies[3] = choicetallies[3]+1;
      };
      console.log(choicetallies);
    var q4 = parseInt($("input:radio[name=q4]:checked").val());
      if (q4 === 1) {
        choicetallies[1] = choicetallies[1]+1;
      }
      else {
        choicetallies[0] = choicetallies[0]+1;
        choicetallies[4] = choicetallies[4]+1;
        choicetallies[2] = choicetallies[2]+1;
        choicetallies[3] = choicetallies[3]+1;
      };
      console.log(choicetallies);
    var q5 = parseInt($("input:radio[name=q5]:checked").val());
      if (q5 === 1) {
        choicetallies[3] = choicetallies[3]+1;
      }
      else {
        choicetallies[2] = choicetallies[2]+1;
      };
      console.log(choicetallies);
    var choice = getMaxOfArray(choicetallies);
    var location = []
    for(i = 0;i <= 4; i++) {
      if (choicetallies[i] === choice) {
        location.push(choices[i]);
      }
    }
    console.log(location)

    $('#decide').fadeOut();
    $('#finalchoice').fadeIn();
    $('.reload').fadeIn();


    $('#finalchoice').text("Congratulations "+$("#q6").val()+"! Your totally accurately assigned choice is: "+location.join(" or"));
    $('#finalchoice').fadeIn();
  });
  var getMaxOfArray = function(numArray) {
    return Math.max.apply(null, numArray);
  };
});
