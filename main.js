

$ ( document ).ready(function(){
  $('#choiceOptionHistory').change(changeOptions);
  $('#randomOptionHistory').change(changeOptions2);
  $("#findYear").click(function() {
    if ($('#choiceOptionHistory').prop('checked', true)){
        var year = $('#choiceOptionHistory2');
        var year = parseInt(year);
        var year = year + " " + $('#bcAD');
    }
    
    else if ($('#randomOptionHistory').prop('checked', true)) {
      var year = Math.floor(Math.random() * (3017 - 1 + 1)) + 1;
      if(year > 1017) {
        var year = year - 1000;
        var year = year + " AD";
      }
      else {
        var year = year + " BC"
      }
      
      
    }
    
    
    console.log(year);
    
    

    
    $("p").text(year);
 })
});
  
function changeOptions () {
  
  //When Choice is selected
  if ($('#choiceOptionHistory').prop('checked', true)){
    
    //Deselects Random
    $('#randomOptionHistory').prop('checked', false);
    $('#choiceOptionHistory').prop('checked', true);
   
    
    
  }
}
  function changeOptions2 () {
  
  //When Random is selected
  if ($('#randomOptionHistory').prop('checked', true)){
    
    //Deselects Choice
    $('#choiceOptionHistory').prop('checked', false);
    $('#randomOptionHistory').prop('checked', true);
   
    
    
  }
}
