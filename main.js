

$ ( document ).ready(function(){
  $('#choiceOptionHistory').change(changeOptions);
  $('#randomOptionHistory').change(changeOptions2);
  $("#findYear").click(function() {
    var randomNumber = Math.floor(Math.random() * (2017 - 1 + 1)) + 1;
    console.log(randomNumber);
    $("p").text(randomNumber);
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
