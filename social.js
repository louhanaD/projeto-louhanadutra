
$("#formulario").on("submit", function(){
	var email= $("[name = email]").val();
	var senha = $("[name = senha]").val();
	
	if(email =="" || senha =="") {
		alert("Campo de email e senha deve ser preenchido");
		//adiciona uma classe no elemento
		$("[name = email]").addClass("erro");
		$("[name = senha]").addClass("erro");
		return false;
	}else{
		//tira uma classe do elemento
		$("[name = email]").removeClass("erro");
		$("[name = senha]").removeClass("erro");

		
	}
	//verifica os caracteres que podem e nao podem ser utilizados
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (re.test(email) === false){
alert("Campo de email inválido...");
	$("[name = email]").addClass("erro");
    	return false;
    }else{
$("[name = email]").removeClass("erro");
    }


	var dadosEnvio = {
		email: email,
		password: senha

	};

	$.ajax({
		type:"post",
		url: "http://192.168.20.91:8085/login",
		data: dadosEnvio,
		success: function (res){
			
			alert("login realizado com sucesso!");

		},
		error: function(xhr){
			alert("xhr.responseJSON.error.message");
		}	
	});

	return false;

});