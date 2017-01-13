$(document).ready(function() {
  $("form#decide").submit(function() {
    event.preventDefault();
    var q1 = $("input:radio[name=q1]:checked").val();
    var q2 = $("input:radio[name=q2]:checked").val();
    var q3 = $("#q3").val();
    q3 = q3.length;
    var q4 = parseInt($("#q4").val());
    var q5 = $("input:radio[name=q5]:checked").val();
    $("#result").text(q1+" "+q2+" "+q3+" "+q4+" "+q5);
    var total = [q1,q2,q3,q4,q5]
    $('#decide').hide();


  });

  
});
