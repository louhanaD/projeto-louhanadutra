$(document).ready(function(){
  $("[name = cep]").mask('99999-999');
  $("[name = cpf]").mask('999.999.999-99')
});
$("#formulario").on("submit", function(){
	var nome = $("[name = nome]").val();
	var sobrenome = $("[name = sobrenome]").val();
	var email = $("[name = email]").val();
	var idade = $("[name = idade]").val();
	var cpf = $("[name = cpf]").val();
	var cep = $("[name = cep]").val();
	var endereco = $("[name = endereco]").val();
	var senha = $("[name = senha]").val();
	//mascara para caracteres numericos e alfabeticos
	 $('[name = cep]').mask('00000-000');
	 $('[name = cpf]').mask('000.000.000-00');

console.log(nome);
	if(nome =="" || sobrenome =="" ||email =="" || idade =="" || cpf == "" || cep == "" || endereco == "" || senha == "") {
		alert("preencha os campos corretamente");
		//adiciona uma classe no elemento
		$("[name = nome]").addClass("erro");
		$("[name = sobrenome]").addClass("erro");
		$("[name = email]").addClass("erro");
		$("[name = idade]").addClass("erro");
		$("[name = cpf]").addClass("erro");
		$("[name = cep]").addClass("erro");
		$("[name = endereco]").addClass("erro");
		$("[name = senha]").addClass("erro");
		return false;
	}else{
		//tira uma classe do elemento
		$("[name = nome]").removeClass("erro");
		$("[name = sobrenome]").removeClass("erro");
		$("[name = email]").removeClass("erro");
		$("[name = idade]").removeClass("erro");
		$("[name = cpf]").removeClass("erro");
		$("[name = cep]").removeClass("erro");
		$("[name = endereco]").removeClass("erro");
		$("[name = senha]").removeClass("erro");
	}
	//verifica os caracteres que podem e nao podem ser utilizados
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //pode utilizar! o if para uma negacao
    if (re.test(email) === false){
		alert("Campo de email inválido...");
		$("[name = email]").addClass("erro");
    	return false;
    }
    else{
		$("[name = email]").removeClass("erro");
    }

	var data = {
		first_name: nome,
		last_name: sobrenome,
		email: email,
		age: idade,
		cpf: cpf,
		cep: cep,
		address: endereco,
		password: senha

	};

	$.ajax({
		type:"post",
		url: "http://realizadigital-api.nodo.cc/register",
		data: data,
		success: function (res){
			
			alert("Cadastro realizado com sucesso!");

		},
		error: function(erro){
			alert("erro.message");
		}	
	});

	return false;

});