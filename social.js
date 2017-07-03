
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
	

});