/*document.querySelectorAll('.tabs-trigger').forEach((item) => 
	item.addEventListener('click', function(e){
		e.preventDefault();

		/* передаем атрибут и убераем из него решетку  */
		/*const id = e.target.getAttribute('href').replace('#', '');
		
		item.classList.toggle('active'); //добавляем класс active сылке таба
 
		document.getElementById(id).classList.toggle('active'); //добавляем класс active контенту таба
	}) 
);
*/




// табы на jquery

$(document).ready(function(){
	$('.tabs-trigger').click(function(e){
		e.preventDefault();

		$('.tabs-trigger').removeClass('active');
		$('.tabs-content').removeClass('active');

		$(this).addClass('active').fadeIn();
		$($(this).attr('href')).addClass('active');
	});
});	
