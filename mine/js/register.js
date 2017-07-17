$('form').on('submit', function() {
	var data = {};

	$(this).serializeArray().map(function(item) {
		data[item.name] = item.value;
	});

	$.ajax({
		type: 'POST',
		url: window.api.url + 'register',
		data: data,
		success: function (res) {
			alert('Cadastro realizado com sucesso!');
			window.location = 'index.html';
		},
		error: function (res) {
			alert(res.responseJSON.error.message);
		}
	});

	return false;
})
