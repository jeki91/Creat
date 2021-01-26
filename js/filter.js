function checkbox() {
	let checkbox = document.getElementById('vegan-chbox');

	if (checkbox.checked) {
		console.log('checked');
		$("[data-cat]").each(function () {
			let cat = $(this).data('cat');

			if (cat != 'vegan') {
				$(this).addClass('hide');
			}
		});

	} else {
		$("[data-cat]").removeClass('hide');
	}
}

