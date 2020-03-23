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