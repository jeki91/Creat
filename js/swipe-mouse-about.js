
$(document).ready(function () {
	
	let initialPoint;
	let finalPoint;

	$('.slider-about').on('mousedown', (event) => {
		event.preventDefault();
		event.stopPropagation();
		initialPoint = event.pageX;  //получаем начальную координату
		
		/*$(document).on('mousemove', (event) => {
		  event.preventDefault();
		  event.stopPropagation();
		  
		});*/
	});

	$('.slider-about').on('mouseup', (event) => {
		finalPoint = event.pageX;  //получаем конечную координату
		
		if (finalPoint > initialPoint) {
			//console.log('право');
			blocks.forEach((item, index) => {
				item.classList.remove('prew');
				item.classList.remove('next');

				if (item.classList.contains('active')) {
					item.classList.remove('active');
					elemIndex = index;
					next = index + 1;
					
					if (next === blocks.length) {
						next = 0;
					}
					prew = index - 1;
					
					if (prew < 0) {
						prew = blocks.length - 1;
					}
				}
			
			});
			
			if (elemIndex === 0) {
				elemIndex = blocks.length - 1;
			} else {
				elemIndex -= 1;
			}
			
			prew = elemIndex - 1;
			
			if (prew < 0) {
				prew = blocks.length - 1;
			}
			
			next -= 1;
			
			if (next < 0) {
				next = blocks.length - 1;
			}
			
			blocks[elemIndex].classList.add('active');
			blocks[prew].classList.add('prew');
			blocks[next].classList.add('next');	
			
		} else {
			//console.log('лево');
			blocks.forEach((item, index) => {
				item.classList.remove('prew');
				item.classList.remove('next');
			
				if (item.classList.contains('active')) {
					item.classList.remove('active');
			
					elemIndex = index;
			
					next = index + 1;
					
					if (next === blocks.length) {
						next = 0;
					}
					prew = index - 1;
					
					if (prew < 0) {
						prew = blocks.length - 1;
					}
				}
			});
				
			elemIndex += 1;
			
			if (elemIndex === blocks.length) {
				elemIndex = 0;
			};
			
			prew = elemIndex - 1;
			
			if (prew < 0) {
				prew = blocks.length - 1;
			}
			next += 1;
			if (next === blocks.length) {
				next = 0;
			}
			
			blocks[elemIndex].classList.add('active');
			blocks[prew].classList.add('prew');
			blocks[next].classList.add('next');
		};

		$(document).off('mousemove')
		
	});
			
}); 


