
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
	var data = {
		email: email,
		password: password

	};

	$.ajax({
		type:"get",
		//nesse endereco eu vou enviar meu email e minha senha para o servidores
		url: "http://192.168.20.91:3004/login?email=" + email + "&password=" + password,
		success: function (res){
			if(res.length > 0){
				alert("login com sucesso!!!");

			}else{
				alert("Login Erro: Verificar o email e senha");
				alert("Efetuar cadastro...");		
			}

		}

	})
return false;
});