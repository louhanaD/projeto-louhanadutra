var userData = JSON.parse(localStorage.getItem('userData'));

console.log(userData);

function loadUserData() {
    $('#bordaAvatar h3').text(userData.first_name + ' 	' + userData.last_name);
    var initials = userData.first_name.charAt(0) +  userData.last_name.charAt(0);
    $("#avatar").text(initials.toUpperCase());
    $(".email").text(userData.email);
    $(".age").text(userData.age + 'anos');
};

function loadFeeds(){
	var wrapper = $(".mensagens");
	var User_id = userData.id;

	$.ajax({
		url: "http://realizadigital-api.nodo.cc/feeds/" + User_id,
		type: "get",
		success: function(res){
			var posts = res.posts;

			var html = "";
			if(posts.length == 0){
				html = '<p class= "erro">Não existe posts no momento</p>';

			}else{				
				posts.reverse();
				for(var i = 0; i < posts.length; i++){
					if(posts[i].liked){
						src = "icon-like-active.png";
					} else {
						src = "icon-like.png";
					}
					html =  html + '<p class= "mensagem"> + <span style ="font-size: 18px;">'+ posts[i].first_name + ' ' + posts[i].last_name + '</span><br>' +posts[i].text + '<br><a href=""><img src='+src+'><span class = "likes-num">' + posts[i].likes + '</span></a></p>';
				}
				
			}
			wrapper.html(html);
		}

	});
}

$("form").on("submit", function(e){
	e.preventDefault();
	var textearea = $("#textarea").val();
	var email =userData.email;
	var passWord = userData.password;

	if(textearea == ""  || textarea < 200) {
		alert("Erro... caixa vazia");
		$("#textarea").addClass("erro");	
		return false;
	}

	$.ajax({
		type: "post",
		url: "http://realizadigital-api.nodo.cc/feed",
		data:{
			text: textearea,
			email: email,
			password: passWord
		},
		success: function(res){
			alert("Publicado com sucesso");
			loadFeeds();
		}
	});

	return false;	
});

function init() {
    loadUserData();
    loadFeeds();
    
}

init();