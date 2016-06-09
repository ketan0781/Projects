$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
// sign in btn  for mobile 	
$('#sign-in').on('click',function(){
	$(this).toggle();
})