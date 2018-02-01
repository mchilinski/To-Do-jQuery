$(document).ready(function(){

  $('.btn-adding').click(function(){
    $('#adding').css("display", "block");
    $(this).css("display", "none");
  })

  $('.btn-deleting').click(function(){
    $( this ).closest('.object').slideUp()
  });

  function addTask(text){
       $('<div class="object"><button class="btn-deleting"><i class="fas fa-times-circle minus"></i></button><p>'+text+'</p></div>').appendTo("#todoList");
       $('.btn-deleting').click(function(){
         $( this ).closest('.object').slideUp()
       });
       $('.text-area').val('');
       $( ".object" ).draggable({
       connectToSortable: "#todoList, #todoList2, #todoList3",
       revert: "invalid"
       });
       };

  $('#adding').submit(function(e){
    $('.btn-adding').css("display", "block");
    $('#adding').css("display", "none");
    e.preventDefault();
    var textarea = $('.text-area').val();
    if (textarea !== '') {
    addTask(textarea);
    textarea.value = '';
    }
  });

  $( function sort() {
    $( "#todoList, #todoList2, #todoList3" ).sortable({
      revert: true
    });
    $( ".object" ).draggable({
    connectToSortable: "#todoList, #todoList2, #todoList3",
    revert: "invalid"
    });
    $( "#todoList, #todoList2" ).disableSelection();
  } );
})
