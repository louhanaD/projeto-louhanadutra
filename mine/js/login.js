$('form').on('submit', function() {
	var data = {};

	$(this).serializeArray().map(function(item) {
		data[item.name] = item.value;
	});

	$.ajax({
		type: 'POST',
		url: window.api.url + 'login',
		data: data,
		success: function (res) {
			var user = res;
			user.password = data.password;
			localStorage.setItem('userData', JSON.stringify(user));
			window.location = 'home.html';
		},
		error: function (res) {
			alert(res.responseJSON.error.message);
		}
	})

	return false;
})
