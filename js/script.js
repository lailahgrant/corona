var count=1;
$('body').on('click', '.next1', function () {
	$('.initial').hide();  //when next button is clicked,hide the initial content on index.html file

	$('#radio-'+count+'').show(); //shows the 1st radio button content
	$('.next1').hide(); //hide the 'start test button ' &
	$('.next2').show(); //show the 'next button'
	
});

$('body').on('click', '.next2', function(){
count++;
	$('#radio-'+count+'').show(); //after increment, show the next radio button content

if(count > 1){
		$('.back1').show();
	}


count--;
	$('#radio-'+count+'').hide(); //hides the previous radio button content to show the new one

count++;
	
	if(count > 8){
		$('.my-radio').hide();
		$('.next2').hide();
		$('.back1').hide();
		$('.end1').show();
	}
});


$('body').on('click', '.back', function () {
	count--;
	$('.my-radio').hide();
	var id = count;
	$('#radio-'+id).show();
	if(count < 1){
		$('.back1').hide();
	}
	
});

$('body').on('click','.do-test-again', function() {
	$('.initial').show();
	$('.end1').hide();
	$('.next1').show();
	window.location.reload(true);
});

// styled the radio buttons on click, but they are all selected
$(document).ready(function(){
	$('.my-styled-radio').click(function(){
		//$(this).css("background-color"," #2196F3"); //works on the selected radio button when clicked
		// $(this).closest('.my-styled-radio').css( "border","1px solid #002d5a");//only styles the border of only the selcted radio btn when the radio btn is selected
		//$(this).closest($(this)).css( "border","1px solid #002d5a");
		$('#next2').removeAttr('disabled').append();
	});
});


// styled the checkbox buttons on click, but they are all selected
$(document).ready(function(){
	$('.button-controls-checkbox').click(function(){
		//$(this).css("background-color"," #2196F3");
		//$(this).closest('.my-styled-radio').css( "border","1px solid #002d5a");
		$('#next2').removeAttr('disabled');
	});
});



// $('body').on('click', '.button-controls', function(){
// 	if(('input[name="exampleRadio"]') && (':checked' == 1)){
// 	$(this).css("background-color"," #2196F3");
// 		$(this).closest('.my-styled-radio').css( "border","1px solid #002d5a");
// 		$('#next2').removeAttr('disabled');
// }
// });

// $(document).ready(function () {                            
//     $("#radio-1, #radio-2", "#radio-3","#radio-4, #radio-5", "#radio-6","#radio-7, #radio-8").change(function () {
//         if ($("#radio-1").is("click")) {
//             $(this).css("background-color"," #2196F3");
//  		$(this).closest('.my-styled-radio').css( "border","1px solid #002d5a");
//  		$('#next2').removeAttr('disabled');
//         }
//         else if ($("#radio-2").is("checked")) {
//             $(this).css("background-color"," #2196F3");
//  		$(this).closest('.my-styled-radio').css( "border","1px solid #002d5a");
//  		$('#next2').removeAttr('disabled');
//         }
//         else {
//         }
            
//     });        
        
// });