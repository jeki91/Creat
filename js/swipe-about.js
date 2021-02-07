
const blocks = document.querySelectorAll('.slider-about__item');

blocks[0].classList.add('active');
blocks[1].classList.add('next');
blocks[blocks.length -1].classList.add('prew');


let elemIndex;
let prew;
let next;

const swipe = document.querySelector('.slider-about');

var initialPoint;
var finalPoint;

const swipeLeft = function(array, a, p, n){
	
		a += 1;
	if(a === array.length) {
		a = 0;
	};

	p = a - 1;
	if (p < 0) {
		p = array.length - 1;
	};
	n += 1;
	if (n === array.length) {
		n = 0;
	}
	console.log(p + '=prew' + a + '=active' + n + 'next');
	console.log('left');
	
	
	
	
};

swipe.addEventListener('touchstart', function(event) {
event.preventDefault();
event.stopPropagation();
initialPoint=event.changedTouches[0];
}, false);
swipe.addEventListener('touchend', function(event) {
event.preventDefault();
event.stopPropagation();
finalPoint=event.changedTouches[0];
var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);

//console.log(initialPoint.pageX, finalPoint.pageX);
if (xAbs > 20 || yAbs > 20) {
if (xAbs > yAbs) {
if (finalPoint.pageX < initialPoint.pageX){
	//console.log('лево');

/*СВАЙП ВЛЕВО*/
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

}
else{
	//console.log('право');

/*СВАЙП ВПРАВО*/
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

}
}
else {
if (finalPoint.pageY < initialPoint.pageY){
/*СВАЙП ВВЕРХ*/}
else{
/*СВАЙП ВНИЗ*/}
}
}
}, false);



