

$ ( document ).ready(function(){
  $('#choiceOptionHistory').change(changeOptions);
  $('#randomOptionHistory').change(changeOptions2);
  $("#findYear").click(function() {
    
    console.log(year);
    
    
    if ($('#randomOptionHistory').prop('checked', true)) {
      var year = Math.floor(Math.random() * (2017 - 1 + 1)) + 1;
    }
    
    else if ($('#choiceOptionHistory').prop('checked', true)){
      var year = $('#choiceOptionHistory2').val();
    }
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
